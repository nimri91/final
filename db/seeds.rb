Dir[File.join(Rails.root, "db", "seeds", "*.rb")].sort.each do |seed|
  puts "seeding - #{seed}. loading seeds, for real!"
  load seed
end

### PUT YOUR SEEDS BELOW THIS LINE:


###Create users ###

User.create([
  { id: 1, email: 'admin@zenhr.com', password: 'password', role: 'admin' },
  { id: 2, email: 'user_1@zenhr.com', password: 'password', role: 'member' },
  { id: 3, email: 'user_2@zenhr.com', password: 'password', role: 'member' }
])

### Create blogs ###

Blog.create([
  { id: 1, user_id: 2, title: 'blog title 1', body: 'blog body 1' },
  { id: 2, user_id: 3, title: 'blog title 2', body: 'blog body 2' },
  { id: 3, user_id: 3, title: 'blog title 3', body: 'blog body 3' }
])

### Create Tags ###

Tag.create([
  { id: 1, name: 'Funny' },
  { id: 2, name: 'Professional' }
])


### Setup Blogs tags memberships ###

Blog.find(1).tags << Tag.find(1)
Blog.find(1).tags << Tag.find(2)
Blog.find(2).tags << Tag.find(2)