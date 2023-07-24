import React from 'react';

const ResearchPapersSection = () => {
  const researchPapers = [
    {
      id: 1,
      title: 'Research Paper 1',
      link: 'https://example.com/research_paper_1.pdf',
      image: 'https://images.unsplash.com/photo-1619418602850-35ad20aa1700?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
    },
    {
      id: 2,
      title: 'Research Paper 2',
      link: 'https://example.com/research_paper_2.pdf',
      image: 'https://images.unsplash.com/photo-1619418602850-35ad20aa1700?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
    },
    {
      id: 3,
      title: 'Research Paper 3',
      link: 'https://example.com/research_paper_3.pdf',
      image: 'https://images.unsplash.com/photo-1619418602850-35ad20aa1700?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
    },
    // Add more research papers as needed
  ];

  return (
    <div className="my-8 container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Recommended Research Papers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {researchPapers.map((paper) => (
          <div key={paper.id} className="bg-white shadow-lg rounded-md overflow-hidden">
            <img
              src={paper.image}
              alt={paper.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{paper.title}</h3>
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-md block text-center hover:bg-blue-600"
              >
                View Paper
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchPapersSection;
