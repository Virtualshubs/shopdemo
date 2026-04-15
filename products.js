const PRODUCTS = [
  {
    id: "vidallamp",
    scene: "aHR0cHM6Ly9wcm9kdWN0LjNkdHdpbnMudGVjaC8/bmFtZT12aWRhbGxhbXAmY29uZmlnPU9iamVjdF8yJTNBJTIzZmZmYmI5JTdDQ3VlcnBvJTNBJTIzYWE3OTQyJTdDQyVDMyVCQXB1bGElM0ElMjNmZmZmZmYlN0NPYmplY3RfNSUzQSUyM2ZmNjI1MSU3Q1RhbGxvX21ldCVDMyVBMWxpY28lM0ElMjMwMDAwMDAlN0NCYXNlX2VzdHJ1Y3R1cmElM0ElMjMyMzIzMjMmcXVhbnRpdHk9MSZ0b2tlbj1lMWJkNzlkYS1kYzdlLTQ4NmQtYmQwZS03NmVkOGM4Mzc5ODEmbW9kZWxVcmw9aHR0cHMlM0ElMkYlMkZkZW1vLjNkdHdpbnMuZXUlMkZ2aWRhbGxhbXAuZ2xiJmJ1eVVSTD1odHRwcyUzQSUyRiUyRjNkdHdpbnMuZXMlMkY=",
    title: "vidallamp",
    price: "179€",
    image: "sources/democonfigurador3dluminaria.png",
    meta: "Printing On demand",
    type: "vh" // sidebar
  },
  {
    id: "Mantra",
    scene: "aHR0cHM6Ly9wcm9kdWN0LjNkdHdpbnMudGVjaC8/bmFtZT1NYW50cmEmY29uZmlnPUhvbWFrY29tYnJfRFNHTjcyNV9NYXRlcmlhbF8lMjMzNzlfMCUzQSUyM2QyOWQwMCU3Q0hvbWFrY29tYnJfRFNHTjcyNV9QcmV0b18yXzAlM0ElMjNkNTg0MDAlN0NjYWJlemFfZGVfbWFkZXJhJTNBJTIzZmZlNGE4JTdDQXJjbyUzQSUyMzIzMjMyMyU3Q1JlY3RhbmdsZTAwM19Db3Vyb19NYXJyb21fMCUzQSUyMzIzMjMyMyU3Q0N5bGluZGVyMDA4X01hZGVpcmFfQ2xhcmFfMCUzQSUyM2ZmZTRhOCU3Q0N5bGluZGVyMDA5X01hdGVyaWFsXyUyMzE5XzAlM0ElMjMwMDJlN2ElN0NDeWxpbmRlcjAxMF9NYXRlcmlhbF8lMjMxOV8wJTNBJTIzMDAyZTdhJTdDQ3VwdWxhJTNBJTIzMDAyZTdhJTdDTGluZTM3Nl9NYXRlcmlhbF8lMjMyN18wJTNBJTIzZmZmZmZmJnF1YW50aXR5PTEmdG9rZW49OThkNGExNWEtMGFmNS00ZjU5LWI5NzYtNWUxYzU5NGE1NWE3Jm1vZGVsVXJsPWh0dHBzJTNBJTJGJTJGZGVtby4zZHR3aW5zLmV1JTJGTWFudHJhLmdsYiZidXlVUkw9aHR0cHMlM0ElMkYlMkYzZHR3aW5zLmVzJTJG",
    title: "Mantra",
    price: "160€",
    image: "sources/mantra_azul.png",
    meta: "Printing On demand",
    type: "vh"
  },

  {
    id: "Sofá",
    scene: "aHR0cHM6Ly9wcm9kdWN0LjNkdHdpbnMudGVjaC8/bmFtZT1Tb2YlQzMlQTEmY29uZmlnPUJhc2VfbWV0JUMzJUExbGljYSUzQSUyMzAzMDQyYiU3Q0VzdHJ1Y3R1cmFfYmFzZSUzQSUyMzE3MTcxNyU3Q0VzdHJ1Y3R1cmFfaW50ZXJuYSUzQSUyMzFmMWYxZiU3Q0VzdHJ1Y3R1cmFfZXh0ZXJuYSUzQSUyMzEyMTIxMiU3Q0NvamluZXNfYXV4aWxpYXJlcyUzQSUyMzE0MTQxNCU3Q0FzaWVudG9zJTNBJTIzMDgwODA4JnF1YW50aXR5PTEmdG9rZW49MDk4ZDM1ZmUtNDBkZC00MzZlLWIyNDUtNWMzZjA4NWJhYWIxJm1vZGVsVXJsPWh0dHBzJTNBJTJGJTJGdmlld2VyLjNkdHdpbnMudGVjaCUyRlNvZmElQ0MlODEuZ2xiJmJ1eVVSTD1odHRwcyUzQSUyRiUyRjNkdHdpbnMuZXM=",
    title: "Sofá",
    price: "129€",
    image: "https://cdn.shopify.com/s/files/1/0948/5366/1017/files/20260115_0053_Image_Generation_remix_01kezestsbfs4avdn5p9enm423.png?v=1774642016",
    type: "grid"
  },

    {
    id: "vidallamp",
    scene: "aHR0cHM6Ly9wcm9kdWN0LjNkdHdpbnMudGVjaC8/bmFtZT12aWRhbGxhbXAmY29uZmlnPU9iamVjdF8yJTNBJTIzZmZmYmI5JTdDQ3VlcnBvJTNBJTIzYWE3OTQyJTdDQyVDMyVCQXB1bGElM0ElMjNmZmZmZmYlN0NPYmplY3RfNSUzQSUyM2ZmNjI1MSU3Q1RhbGxvX21ldCVDMyVBMWxpY28lM0ElMjMwMDAwMDAlN0NCYXNlX2VzdHJ1Y3R1cmElM0ElMjMyMzIzMjMmcXVhbnRpdHk9MSZ0b2tlbj1lMWJkNzlkYS1kYzdlLTQ4NmQtYmQwZS03NmVkOGM4Mzc5ODEmbW9kZWxVcmw9aHR0cHMlM0ElMkYlMkZkZW1vLjNkdHdpbnMuZXUlMkZ2aWRhbGxhbXAuZ2xiJmJ1eVVSTD1odHRwcyUzQSUyRiUyRjNkdHdpbnMuZXMlMkY=",
    title: "vidallamp",
    price: "179€",
    image: "sources/democonfigurador3dluminaria.png",
    meta: "Printing On demand",
    type: "grid" 
  },
   {
    id: "Mantra",
    scene: "aHR0cHM6Ly9wcm9kdWN0LjNkdHdpbnMudGVjaC8/bmFtZT1NYW50cmEmY29uZmlnPUhvbWFrY29tYnJfRFNHTjcyNV9NYXRlcmlhbF8lMjMzNzlfMCUzQSUyM2QyOWQwMCU3Q0hvbWFrY29tYnJfRFNHTjcyNV9QcmV0b18yXzAlM0ElMjNkNTg0MDAlN0NjYWJlemFfZGVfbWFkZXJhJTNBJTIzZmZlNGE4JTdDQXJjbyUzQSUyMzIzMjMyMyU3Q1JlY3RhbmdsZTAwM19Db3Vyb19NYXJyb21fMCUzQSUyMzIzMjMyMyU3Q0N5bGluZGVyMDA4X01hZGVpcmFfQ2xhcmFfMCUzQSUyM2ZmZTRhOCU3Q0N5bGluZGVyMDA5X01hdGVyaWFsXyUyMzE5XzAlM0ElMjMwMDJlN2ElN0NDeWxpbmRlcjAxMF9NYXRlcmlhbF8lMjMxOV8wJTNBJTIzMDAyZTdhJTdDQ3VwdWxhJTNBJTIzMDAyZTdhJTdDTGluZTM3Nl9NYXRlcmlhbF8lMjMyN18wJTNBJTIzZmZmZmZmJnF1YW50aXR5PTEmdG9rZW49OThkNGExNWEtMGFmNS00ZjU5LWI5NzYtNWUxYzU5NGE1NWE3Jm1vZGVsVXJsPWh0dHBzJTNBJTJGJTJGZGVtby4zZHR3aW5zLmV1JTJGTWFudHJhLmdsYiZidXlVUkw9aHR0cHMlM0ElMkYlMkYzZHR3aW5zLmVzJTJG",
    title: "Mantra",
    price: "160€",
    image: "sources/mantra_azul.png",
    meta: "Printing On demand",
    type: "grid"
  },
  
];
