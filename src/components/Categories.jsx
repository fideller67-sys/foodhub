import * as Icons from 'lucide-react';

const Categories = ({ categories }) => {
  return (
    <section className="container mb-14">
      <div className="flex justify-between items-baseline mb-8">
        <h2 className="text-2xl font-bold text-secondary">What are you craving?</h2>
        <a href="#all" className="text-primary font-semibold text-[15px] hover:underline transition-colors duration-200">See all</a>
      </div>
      
      <div className="flex gap-10 overflow-x-auto pb-4 scrollbar-hide">
        {categories.map((cat) => {
          const IconComponent = Icons[
            Object.keys(Icons).find(
              key => key.toLowerCase() === cat.icon.toLowerCase().replace(/-/g, '')
            ) || 'Utensils'
          ];

          return (
            <div className="flex flex-col items-center gap-4 cursor-pointer min-w-[80px] group" key={cat.id}>
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-sm transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-md" 
                style={{ backgroundColor: cat.color }}
              >
                <IconComponent 
                  color={cat.color === '#F25C05' ? 'white' : '#F25C05'} 
                  size={20} 
                  strokeWidth={1.5}
                />
              </div>
              <span className="font-semibold text-[15px] text-secondary group-hover:-translate-y-1 transition-transform duration-200">{cat.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
