
import AboutMeWidget from './components/AboutMeWidget';
import GalleryWidget from './components/GalleryWidget';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#191B1F] to-[#191B1F] w-full p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center lg:items-end space-y-4 sm:space-y-6 lg:mr-8">
          {/* About Me Widget - stacked on top */}
          <AboutMeWidget />
          
          {/* Divider line between containers */}
          <div className="w-full sm:w-3/4 lg:w-1/2 max-w-xl lg:mr-12 border-2 rounded-2xl border-gray-600"></div>
          
          {/* Gallery Widget - stacked below */}
          <GalleryWidget />
          <div className="w-full sm:w-3/4 lg:w-1/2 max-w-xl lg:mr-12 border-2 rounded-2xl border-gray-600"></div>

        </div>
      </div>
    </div>
  );
}
