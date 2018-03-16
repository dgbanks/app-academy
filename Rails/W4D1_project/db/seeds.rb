# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

davinci = User.create(username: 'davinci')
vg = User.create(username: 'vangogh')
pp = User.create(username: 'picasso')
cm = User.create(username: 'monet')

magi = Artwork.create(
  title: 'The Adoration of the Magi',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Leonardo_da_Vinci_-_Adorazione_dei_Magi_-_Google_Art_Project.jpg',
  artist_id: davinci.id
)

monalisa = Artwork.create(
  title: 'Mona Lisa',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
  artist_id: davinci.id
)

ArtworkShare.create(artwork_id: magi.id, viewer_id: vg.id)
ArtworkShare.create(artwork_id: magi.id, viewer_id: pp.id)
ArtworkShare.create(artwork_id: magi.id, viewer_id: cm.id)
ArtworkShare.create(artwork_id: monalisa.id, viewer_id: vg.id)
ArtworkShare.create(artwork_id: monalisa.id, viewer_id: pp.id)
