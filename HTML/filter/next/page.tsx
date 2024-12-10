'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Chip from '@/components/Chip';

interface Lecture {
  id: number;
  title: string;
  enroll_type: number;
  is_free: boolean;
}

interface Filters {
  title: string;
  isFree: string;
}

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentFilters, setCurrentFilters] = useState<Filters>({
    title: 'all',
    isFree: 'all',
  });

  // 샘플 강의 데이터
  const lectures: Lecture[] = [
    {
      id: 1,
      title: '실전 C언어 프로그래밍',
      enroll_type: 0,
      is_free: true,
    },
    { id: 2, title: '파이썬 기초 강의', enroll_type: 0, is_free: false },
    {
      id: 3,
      title: 'C언어로 시작하는 알고리즘',
      enroll_type: 0,
      is_free: false,
    },
    { id: 4, title: '파이썬 데이터 분석', enroll_type: 0, is_free: true },
    { id: 5, title: '고급 C언어 과정', enroll_type: 0, is_free: true },
    { id: 6, title: '파이썬 머신러닝', enroll_type: 0, is_free: false },
  ];

  // URL 업데이트 함수
  const updateURL = (newFilters: Filters) => {
    const params = new URLSearchParams();
    params.set('title', newFilters.title);
    params.set('isFree', newFilters.isFree);
    router.push(`?${params.toString()}`);
  };

  // 필터 변경 핸들러
  const handleFilterChange = (type: 'title' | 'isFree', value: string) => {
    const newFilters = { ...currentFilters, [type]: value };
    setCurrentFilters(newFilters);
    updateURL(newFilters);
  };

  // 강의 필터링
  const filterLectures = () => {
    return lectures.filter((lecture) => {
      const titleMatch =
        currentFilters.title === 'all' ||
        lecture.title
          .toLowerCase()
          .includes(currentFilters.title.toLowerCase());

      const priceMatch =
        currentFilters.isFree === 'all' ||
        lecture.is_free === (currentFilters.isFree === 'true');

      return titleMatch && priceMatch;
    });
  };

  // URL에서 초기 필터 상태 로드
  useEffect(() => {
    const title = searchParams.get('title') || 'all';
    const isFree = searchParams.get('isFree') || 'all';
    setCurrentFilters({ title, isFree });
  }, [searchParams]);

  const filteredLectures = filterLectures();

  return (
    <div className="max-w-[1000px] mx-auto p-5">
      <h1 className="text-2xl font-bold mb-6">프로그래밍 강의 검색</h1>

      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex gap-2">
          <Chip
            label="전체"
            active={currentFilters.title === 'all'}
            onClick={() => handleFilterChange('title', 'all')}
          />
          <Chip
            label="C언어"
            active={currentFilters.title === 'C언어'}
            onClick={() => handleFilterChange('title', 'C언어')}
          />
          <Chip
            label="파이썬"
            active={currentFilters.title === '파이썬'}
            onClick={() => handleFilterChange('title', '파이썬')}
          />
        </div>
        <div className="flex gap-2">
          <Chip
            label="전체"
            active={currentFilters.isFree === 'all'}
            onClick={() => handleFilterChange('isFree', 'all')}
          />
          <Chip
            label="무료"
            active={currentFilters.isFree === 'true'}
            onClick={() => handleFilterChange('isFree', 'true')}
          />
          <Chip
            label="유료"
            active={currentFilters.isFree === 'false'}
            onClick={() => handleFilterChange('isFree', 'false')}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredLectures.map((lecture) => (
          <div key={lecture.id} className="border rounded-lg p-4 bg-white">
            <h3 className="text-lg font-semibold mb-2">{lecture.title}</h3>
            <p
              className={`font-bold ${
                lecture.is_free ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {lecture.is_free ? '무료' : '유료'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
