const RPC = require('@hyperswarm/rpc')

// Create swarm and RPC server
const rpc = new RPC()

async function main() {
    // Replace server key with server public key from chat-server.js
    const client = rpc.connect(Buffer.from('b66764705a0fe18479457349df3992e6d471ceaf9dcb9d4aec6cb784b4871d68', 'hex'))
    await client.request('echo', Buffer.from('hello world'))

}

main().catch(console.error)