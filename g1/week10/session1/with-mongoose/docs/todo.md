- auth
  1. register

- blog
  1. create blog
  2. delete blog
  3. restore it

- user
  1. get profile
  2. update account

- ODM >> Object Document Modeling >> mongoose

1. query builder. >> User.create() >> [db.collection('users').insertOne() , db.collection('users').insertMany() ]
2. validation. name -> [required,minlength,maxlength,trim] , email -> unique , isDeleted -> default false.
3. hooks/middleware. User.deleteOne() >> trigger FN >> fire before delete >> SQL >> ON DELETE CASCADE.
4. populate. >> user.find().populate('posts') >> posts.find({include:[author]}) >> n+1 problem.
5. lookup >> one query get posts with user data.
6. populate >> two queries get posts with user data.
7. transaction. >> [query1,query2,query3] all success or fail.
8. plugins. Products.find().plugin(paginate) >> pagination.
9. Discriminators.
10. modeling.

// class BE >> collection DB
