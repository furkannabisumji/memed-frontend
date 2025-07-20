const teamMembers = [
  { name: 'Furkan Nabi Sumji', role: 'Lead & Backend Architect', avatar: '/avatars/placeholder-1.png' },
  { name: 'Apurva Borhade', role: 'Head of Design & Frontend', avatar: '/avatars/placeholder-2.png' },
  { name: 'Chukwunonso Ikeji', role: 'Frontend Lead & Project Strategist', avatar: '/avatars/placeholder-3.png' },
];

export function TeamSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Meet the Team</h2>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
            {teamMembers.map((member) => (
              <div key={member.name}>
                <div className="w-32 h-32 mx-auto rounded-full bg-gray-700 mb-4 border-4 border-green-500/50">
                  {/* Placeholder for avatar image */}
                  {/* <img src={member.avatar} alt={member.name} className="w-full h-full rounded-full object-cover" /> */}
                </div>
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-green-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
