﻿using common.libs;
using common.libs.extends;
using common.server;
using common.server.model;
using server.messengers.singnin;
using System.Text;

namespace server.service.messengers
{
    /// <summary>
    /// 加密
    /// </summary>
    [MessengerIdRange((ushort)CryptoMessengerIds.Min,(ushort)CryptoMessengerIds.Max)]
    public sealed class CryptoMessenger : IMessenger
    {
        private readonly IAsymmetricCrypto asymmetricCrypto;
        private readonly ICryptoFactory cryptoFactory;
        private readonly IClientSignInCaching clientSignInCache;
        private readonly Config config;
        /// <summary>
        /// 
        /// </summary>
        /// <param name="asymmetricCrypto"></param>
        /// <param name="cryptoFactory"></param>
        /// <param name="clientSignInCache"></param>
        /// <param name="config"></param>
        public CryptoMessenger(IAsymmetricCrypto asymmetricCrypto, ICryptoFactory cryptoFactory, IClientSignInCaching clientSignInCache, Config config)
        {
            this.asymmetricCrypto = asymmetricCrypto;
            this.cryptoFactory = cryptoFactory;
            this.clientSignInCache = clientSignInCache;
            this.config = config;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="connection"></param>
        /// <returns></returns>
        [MessengerId((ushort)CryptoMessengerIds.Key)]
        public void Key(IConnection connection)
        {
            connection.WriteUTF8(asymmetricCrypto.Key.PublicKey);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="connection"></param>
        /// <returns></returns>
        [MessengerId((ushort)CryptoMessengerIds.Set)]
        public byte[] Set(IConnection connection)
        {
            string password;
            if (connection.ReceiveRequestWrap.Payload.Length > 0)
            {
                var memory = asymmetricCrypto.Decode(connection.ReceiveRequestWrap.Payload);
                password = memory.GetUTF8String();
            }
            else
            {
                password = config.EncodePassword;
            }
            if (string.IsNullOrWhiteSpace(password))
            {
                return Helper.FalseArray;
            }

            ISymmetricCrypto encoder = cryptoFactory.CreateSymmetric(password);
            connection.EncodeEnable(encoder);
            return Helper.TrueArray;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="connection"></param>
        /// <returns></returns>
        [MessengerId((ushort)CryptoMessengerIds.Test)]
        public byte[] Test(IConnection connection)
        {
            Logger.Instance.DebugDebug($"encoder test : {Encoding.UTF8.GetString(connection.Crypto.Decode(connection.ReceiveRequestWrap.Payload).Span)}");
            return Helper.TrueArray;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="connection"></param>
        /// <returns></returns>
        [MessengerId((ushort)CryptoMessengerIds.Clear)]
        public byte[] Clear(IConnection connection)
        {
            if (clientSignInCache.Get(connection.ConnectId, out SignInCacheInfo client))
            {
                client.Connection?.EncodeDisable();
            }
            return Helper.FalseArray;
        }
    }
}
