// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Eye, Clock, ChevronRight, ArrowUp, Calendar, Award, BookOpen } from 'lucide-react';
// @ts-ignore;
import { Avatar, AvatarFallback, AvatarImage, Badge } from '@/components/ui';

export default function ArticlePage(props) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const relatedArticles = [{
    id: 1,
    title: '高三一模成绩分析：如何制定冲刺计划',
    readCount: 15620,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=200&fit=crop'
  }, {
    id: 2,
    title: '985/211高校最新招生政策解读',
    readCount: 23890,
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=300&h=200&fit=crop'
  }, {
    id: 3,
    title: '高考志愿填报：家长必须掌握的5个技巧',
    readCount: 31250,
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=300&h=200&fit=crop'
  }];
  const importantDates = [{
    month: '11月',
    event: '高考报名确认',
    status: '进行中'
  }, {
    month: '12月',
    event: '艺术类统考',
    status: '准备中'
  }, {
    month: '3月',
    event: '高考体检',
    status: '待开始'
  }, {
    month: '6月',
    event: '高考正式考试',
    status: '待开始'
  }];
  return <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-red-25">
    {/* 返回顶部按钮 */}
    {showScrollTop && <button className="fixed bottom-4 right-4 z-50 rounded-full bg-red-700 text-white shadow-lg p-3" onClick={scrollToTop}>
        <ArrowUp className="w-5 h-5" />
      </button>}

    {/* 文章头部 - 高中生校园实景 */}
    <div className="relative">
      <div className="h-48 bg-gradient-to-r from-red-700 to-red-800 relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=300&fit=crop" alt="高中生课堂" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-red-800/80 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 mb-2">
            <Badge className="bg-amber-500 text-white border-0 text-xs">
              <Award className="w-3 h-3 mr-1" />
              高考必读
            </Badge>
            <Badge className="bg-white/20 text-white border-0 text-xs">
              政策解读
            </Badge>
          </div>
          <h1 className="text-xl font-bold text-white leading-tight">
            2024新高考政策深度解读：高中生家长必读指南
          </h1>
        </div>
      </div>
      
      <div className="px-4 py-3 bg-white border-b border-red-100">
        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=32&h=32&fit=crop&crop=face" />
            <AvatarFallback>高</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium text-gray-900">高考升学指导</p>
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                10-24
              </span>
              <span className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                8.9万
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* 重要时间节点提醒 */}
    <div className="mx-4 mt-4">
      <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-4 text-white">
        <h3 className="font-bold text-sm mb-3 flex items-center">
          <Calendar className="w-4 h-4 mr-2" />
          2025高考重要时间节点
        </h3>
        <div className="grid grid-cols-4 gap-2">
          {importantDates.map((date, index) => <div key={index} className="text-center">
              <div className="text-xs opacity-90">{date.month}</div>
              <div className="text-xs font-bold">{date.event}</div>
            </div>)}
        </div>
      </div>
    </div>

    {/* 文章正文 - 高中生家长专用内容 */}
    <div className="px-4 py-4">
      <div className="text-base leading-relaxed text-gray-800">
        <p className="mb-4 text-sm">
          高三的家长们注意了！2024年新高考政策有重大调整，这些变化将直接影响您孩子的升学路径。
          作为陪伴孩子走过高考之路的家长，您必须第一时间掌握这些关键信息。
        </p>

        {/* 配图：高三课堂实景 */}
        <div className="my-4 rounded-lg overflow-hidden">
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=400&fit=crop" alt="高三学生认真学习" className="w-full h-40 object-cover" />
          <p className="text-xs text-gray-500 bg-gray-100 p-2">高三学生备战高考的真实场景</p>
        </div>

        <h2 className="text-base font-bold text-red-700 mt-5 mb-3 flex items-center">
          <BookOpen className="w-5 h-5 mr-2" />
          变化一：选科要求更加严格
        </h2>
        <p className="mb-3 text-sm">
          2024年起，92%的985高校专业对选科有明确要求。物理+化学组合可报考专业比例达到96.5%，
          而纯文科组合可报考专业仅52.3%。这意味着选科决策将直接影响孩子的专业选择范围。
        </p>

        {/* 配图：选科指导现场 */}
        <div className="my-4 rounded-lg overflow-hidden">
          <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=400&fit=crop" alt="选科指导讲座" className="w-full h-40 object-cover" />
          <p className="text-xs text-gray-500 bg-gray-100 p-2">高校招生老师在为学生做选科指导</p>
        </div>

        <h2 className="text-base font-bold text-red-700 mt-5 mb-3 flex items-center">
          <Award className="w-5 h-5 mr-2" />
          变化二：强基计划扩容
        </h2>
        <p className="mb-3 text-sm">
          强基计划招生院校从39所增加到45所，新增西北农林科技大学、东北大学等6所高校。
          数学、物理等基础学科招生名额增加20%，这对理科尖子生是重大利好。
        </p>

        <h2 className="text-base font-bold text-red-700 mt-5 mb-3 flex items-center">
          <Clock className="w-5 h-5 mr-2" />
          变化三：综合素质评价权重提升
        </h2>
        <p className="mb-3 text-sm">
          综合素质评价在录取中的权重从原来的5%提升到15%。这意味着除了分数，
          孩子的社会实践、研究性学习、志愿服务等经历也将成为重要参考。
        </p>

        {/* 配图：学生实践活动 */}
        <div className="my-4 rounded-lg overflow-hidden">
          <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=400&fit=crop" alt="学生参加社会实践" className="w-full h-40 object-cover" />
          <p className="text-xs text-gray-500 bg-gray-100 p-2">高三学生参加高校研学活动</p>
        </div>
      </div>
    </div>

    {/* 相关推荐 - 高中资讯 */}
    <div className="px-4 pb-6">
      <h3 className="text-base font-bold text-gray-900 mb-3">高中资讯</h3>
      <div className="space-y-3">
        {relatedArticles.map(article => <div key={article.id} className="flex gap-3 p-3 bg-white border border-red-100 rounded-lg shadow-sm active:shadow-md transition-shadow active:scale-[0.98]" onClick={() => console.log('查看文章:', article.title)}>
            <img src={article.image} alt={article.title} className="w-20 h-14 object-cover rounded" />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-gray-900 line-clamp-2">
                {article.title}
              </h4>
              <p className="text-xs text-red-600 mt-1">{article.readCount}家长已读</p>
            </div>
            <ChevronRight className="w-4 h-4 text-red-400 self-center flex-shrink-0" />
          </div>)}
      </div>
    </div>
  </div>;
}