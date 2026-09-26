* types of operations


1. Operations run on worker threads:
    - method related to Cryptography [crypto]
    - method related to Compression [gzlib]
    - async method related to I/O [fs]
    - methods related lookup to DNS [dns] >> facebook.com >> IP
2. Operations run on OS:
    - method related to Networking [http]
3. Operations run on the Main thread:
   // callback of sync
    - timers [setTimeout - setInterval]
    - I/O operations [fs]
    - process.nextTix
    - promises
   
