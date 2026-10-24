### workflow:

[+] service -> repository

[+] controller -> service.

[+] route -> controller.

[+] test.

=================================

### test cases:

[-] register with email - password.

[-] register with phone - password.

[-] register with userName - password.

[-] register with userName - email - phone - password.

[-] register with password.

================================

### todo validation concept.

================================

### what is a ODM:

- Object Document Modeling: Mongoose - prisma

1. query builder. >> User.create() >> [db.collection('users').insertOne() , db.collection('users').insertMany() ]
2. validation. name -> [required,minlength,maxlength,trim] , email -> unique , isDeleted -> default false.
3. hooks/middleware. User.deleteOne() >> trigger FN >> fire before delete >> SQL >> ON DELETE CASCADE.
4. populate. >> user.find().populate('posts') >> posts.find({include:[author]}) >> n+1 problem.
5. lookup >> one query get posts with user data.
6. populate >> two queries get posts with user data.
7. transaction. >> [query1,query2,query3] all success or fail.
8. plugins. Products.find().plugin(paginate) >> pagination.
9. Discriminators. Users -> customer -> Seller -> Admin
10. modeling. User -> represent -> Collection into DB
