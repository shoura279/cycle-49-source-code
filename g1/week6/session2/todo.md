* types of operations

1. operations run on OS threads
    - Networking [http requests]

2. operations run on libUV threads
    - operations related to Cryptography
    - async methods I/O [fs]
    - DNS lockup >> http://facebook.com >> DNS >> IP
    - compression >> gzlib >>

3. operations run on the main thread
   // callbacks of
   a. Timers [setTimeout , setInterval] -> setTimeout(()=>{},3000)
   b. I/O operations -> fs.readFile(path, {} , (err,data)=>{})
   c. setImmediate
   d. process.nextTic
   e. promises