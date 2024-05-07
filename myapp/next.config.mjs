/** @type {import('next').NextConfig}*/
const nextConfig = { 
    images: { 
        domains: ["res.cloudinary.com","hamedia.b-cdn.net","www.tuniscope.com","c8.alamy.com","encrypted-tbn0.gstatic.com","www.codeur.com"]
    },
    env:{
        API_URL : "http://localhost:3001/api",
        SECRET : "secret"
        }
};

export default nextConfig;
