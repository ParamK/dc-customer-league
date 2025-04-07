'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const ShowcaseSwiper = () => {
    // Sample fixtures data
    const fixturesData = [
        {
            id: 1,
            homeTeam: 'Red Dragons',
            awayTeam: 'Blue Eagles',
            date: 'March 15, 2024',
            time: '19:30',
            venue: 'Central Stadium',
            competition: 'Premier League',
            ticketsAvailable: true
        },
        {
            id: 2,
            homeTeam: 'Green Lions',
            awayTeam: 'Yellow Tigers',
            date: 'March 18, 2024',
            time: '20:00',
            venue: 'Lion\'s Arena',
            competition: 'Cup Quarter-Final',
            ticketsAvailable: true
        },
        {
            id: 3,
            homeTeam: 'Purple Hawks',
            awayTeam: 'White Bears',
            date: 'March 22, 2024',
            time: '18:45',
            venue: 'Hawks Stadium',
            competition: 'Premier League',
            ticketsAvailable: false
        }
    ];

    return (
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] mb-4 sm:mb-6 md:mb-8">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                effect="fade"
                // autoplay={{
                //     delay: 4000,
                //     disableOnInteraction: false,
                // }}
                className="w-full h-full rounded-lg overflow-hidden"
            >
                {/* Image with Overlay Text */}
                <SwiperSlide className="h-full">
                    <div className="relative w-full h-full">
                        <img
                            src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211"
                            alt="Football Stadium"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </SwiperSlide>

                {/* Stats Card Slide */}
                <SwiperSlide className="h-full">
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="relative w-full h-full">
                            <img
                                src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5"
                                alt="Track Background"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </SwiperSlide>

                {/* Split Content Slide */}
                <SwiperSlide>
                    <div className="w-full h-full flex flex-col md:flex-row">
                        <div className="w-full h-full bg-white p-4 sm:p-8 md:p-12 text-center flex items-center justify-center order-2 md:order-1">
                            <div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-800">Next Big Event</h3>
                                <div className="flex justify-between items-center gap-3">
                                    <p className="font-semibold text-md sm:text-base truncate">Red Dragons</p>
                                    <span className="text-gray-500">vs</span>
                                    <p className="font-semibold text-md sm:text-base truncate">Blue Eagles</p>
                                </div>
                                <div className="space-y-2 sm:space-y-3 md:space-y-4 p-4">
                                    <div className="flex justify-center items-center text-gray-700">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span className="text-sm sm:text-base">March 15, 2024</span>
                                    </div>
                                    <div className="flex justify-center items-center text-gray-700">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="text-sm sm:text-base">Central Stadium</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Featured Athletes Slide */}
                {/* <SwiperSlide>
                    <div className="w-full h-full bg-gray-900 p-4 sm:p-8 md:p-12 flex items-center justify-center">
                        <div className="text-center text-white">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">Featured Athletes</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="text-center">
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-2 sm:mb-3 md:mb-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                                            <span className="text-2xl sm:text-3xl">🏃‍♂️</span>
                                        </div>
                                        <div className="text-base sm:text-lg font-semibold">Athlete {i}</div>
                                        <div className="text-xs sm:text-sm opacity-70">Team {i}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </SwiperSlide> */}

            </Swiper>
        </div>
    );
};

export default ShowcaseSwiper; 