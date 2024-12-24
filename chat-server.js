const RPC = require('@hyperswarm/rpc')

// Create swarm and RPC server
const rpc = new RPC()

async function main() {

    // Create a new RPC server
    const server = rpc.createServer()
    await server.listen()
    
    // Define RPC methods
    server.respond('echo', async (message) => {
      console.log('Received:', message.toString())
      return message;
    })
    
    // Log the server's public key
    console.log(server.publicKey.toString('hex'))

}

main().catch(console.error)