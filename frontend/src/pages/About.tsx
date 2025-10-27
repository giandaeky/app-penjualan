import React from 'react';

const About: React.FC = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-green-600 mb-4">Tentang Kami</h1>
            <p className="text-gray-700">
                Groceria adalah aplikasi belanja modern yang menggabungkan desain elegan dan fitur interaktif.
                Dibangun dengan React dan Tailwind CSS, kami fokus pada pengalaman pengguna yang stylish dan praktis.
            </p>
        </div>
    );
};

export default About;
