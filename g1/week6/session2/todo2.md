-- part-1

- node internals
- types of operations

1. Operations run on libUV -> [thread pool , worker threads]
   a. cryptography -> [hash , encryption] -> time
   b. DNS lockup -> www.facebook.com -> ip -> 129.88.67.12
   c. compression -> [gzlib]
   d. async methods I/O [fs]
2. Operations run on OS threads
   a. networking -> create server -> send request
3. Operations run on Main thread
   // callbacks of
   a. Timers [setTimeout , setInterval] -> setTimeout(()=>{},3000)
   b. I/O operations -> fs.readFile(path, {} , (err,data)=>{})
   c. setImmediate
   d. process.nextTic
   e. promises

------------------------
-- part-2

- express

1. middleware : function -> function -> function
2. express.json() : builtin middleware
3. error handler : special -> err , req , res, next
4. router
5. CRUD 