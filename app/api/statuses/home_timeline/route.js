const dict = [{
  postContent: 'I am the one who knocks',
  postAuthor: 'Darth Vader',
  postDate: '23/01/2021',
  postLikes: 12,
  id: 1
},
{
  postContent: `No me gusta el nuevo enfoque que se le dá a la IA,
  Considero que se debe hacer mas gradual, aunque Elon Musk quiera 
  dominar el mundo weon xD`,
  postAuthor: 'Elona Muskera',
  postDate: '23/01/2021',
  postLikes: 12,
  id: 1
},
{
  postContent: `No me gusta el nuevo enfoque que se le dá a la IA,
  Considero que se debe hacer mas gradual, aunque Elon Musk quiera 
  dominar el mundo weon xD`,
  postAuthor: 'Elona Muskera',
  postDate: '23/01/2021',
  postLikes: 12,
  id: 1
},
{
  postContent: `No me gusta el nuevo enfoque que se le dá a la IA,
  Considero que se debe hacer mas gradual, aunque Elon Musk quiera 
  dominar el mundo weon xD`,
  postAuthor: 'Elona Muskera',
  postDate: '23/01/2021',
  postLikes: 12,
  id: 1
},
{
  postContent: `No me gusta el nuevo enfoque que se le dá a la IA,
  Considero que se debe hacer mas gradual, aunque Elon Musk quiera 
  dominar el mundo weon xD`,
  postAuthor: 'Elona Muskera',
  postDate: '23/01/2021',
  postLikes: 12,
  id: 1
}
]

export async function GET (request) {
  return new Response(JSON.stringify(dict))
}
