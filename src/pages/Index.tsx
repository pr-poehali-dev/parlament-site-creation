import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Layout',
      title: 'Корпоративные сайты',
      description: 'Профессиональные решения для представления вашей компании в интернете'
    },
    {
      icon: 'ShoppingCart',
      title: 'Интернет-магазины',
      description: 'E-commerce платформы с удобной системой управления и оплаты'
    },
    {
      icon: 'Smartphone',
      title: 'Мобильные приложения',
      description: 'Нативные и кроссплатформенные приложения для iOS и Android'
    },
    {
      icon: 'Palette',
      title: 'Веб-дизайн',
      description: 'Современный UI/UX дизайн, который привлекает и удерживает клиентов'
    },
    {
      icon: 'Search',
      title: 'SEO продвижение',
      description: 'Выведем ваш сайт в топ поисковых систем и привлечем целевой трафик'
    },
    {
      icon: 'Settings',
      title: 'Техподдержка',
      description: 'Постоянное сопровождение и развитие вашего проекта'
    }
  ];

  const portfolio = [
    {
      title: 'Финтех платформа',
      category: 'Веб-приложение',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
    },
    {
      title: 'E-commerce Маркетплейс',
      category: 'Интернет-магазин',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop'
    },
    {
      title: 'Корпоративный портал',
      category: 'Корпоративный сайт',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop'
    },
    {
      title: 'Мобильное приложение',
      category: 'Mobile App',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop'
    }
  ];

  const team = [
    {
      name: 'Александр Петров',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop'
    },
    {
      name: 'Мария Иванова',
      role: 'Lead Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop'
    },
    {
      name: 'Дмитрий Сидоров',
      role: 'Tech Lead',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop'
    },
    {
      name: 'Елена Смирнова',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop'
    }
  ];

  const blogPosts = [
    {
      title: 'Тренды веб-дизайна 2024',
      date: '15 октября 2024',
      excerpt: 'Разбираем главные тренды в дизайне, которые будут актуальны в следующем году',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop'
    },
    {
      title: 'Как выбрать CMS для сайта',
      date: '10 октября 2024',
      excerpt: 'Сравниваем популярные системы управления контентом и даем рекомендации',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop'
    },
    {
      title: 'SEO в 2024: что важно знать',
      date: '5 октября 2024',
      excerpt: 'Актуальные методы продвижения сайта в поисковых системах',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=600&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="text-2xl font-bold text-secondary">
              Парламент
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              {['home', 'services', 'portfolio', 'about', 'blog', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'services' && 'Услуги'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'about' && 'О компании'}
                  {section === 'blog' && 'Блог'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </nav>

            <Button className="hidden md:flex">
              Заказать проект
            </Button>

            <button className="md:hidden">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <section id="home" className="py-24 bg-gradient-to-br from-background via-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Создаём сайты,<br />
                <span className="text-primary">которые работают</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Разрабатываем современные веб-решения для бизнеса любого масштаба
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  Обсудить проект
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Посмотреть работы
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-5xl font-bold text-primary">150+</div>
                <div className="text-lg">Проектов</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold text-primary">8</div>
                <div className="text-lg">Лет на рынке</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold text-primary">98%</div>
                <div className="text-lg">Довольных клиентов</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold text-primary">24/7</div>
                <div className="text-lg">Поддержка</div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Полный цикл разработки от идеи до запуска и поддержки
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="hover-lift cursor-pointer border-2 hover:border-primary/50 transition-all"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                      <Icon name={service.icon as any} size={32} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Работы, которыми мы гордимся
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {portfolio.map((project, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden hover-lift cursor-pointer group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="text-sm text-primary mb-2">{project.category}</div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                Смотреть все проекты
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">О компании</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Мы — команда профессионалов, которая создает digital-решения
              </p>
            </div>

            <div className="max-w-4xl mx-auto mb-16">
              <Card className="p-8 md:p-12">
                <p className="text-lg leading-relaxed text-center mb-8">
                  <strong>Парламент</strong> — это веб-студия с 8-летним опытом разработки сайтов и веб-приложений. 
                  Мы работаем с проектами любой сложности: от лендингов до сложных корпоративных порталов и e-commerce решений.
                </p>
                <p className="text-lg leading-relaxed text-center">
                  Наш подход — это сочетание современных технологий, креативного дизайна и глубокого понимания бизнес-задач клиента. 
                  Мы не просто пишем код, мы создаём инструменты для роста вашего бизнеса.
                </p>
              </Card>
            </div>

            <div className="mb-16">
              <h3 className="text-3xl font-bold text-center mb-12">Наша команда</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                  <Card 
                    key={index} 
                    className="text-center hover-lift cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                      <p className="text-muted-foreground">{member.role}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="p-8 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-xl font-bold mb-3">Наша миссия</h4>
                <p className="text-muted-foreground">
                  Делать качественные веб-решения доступными для каждого бизнеса
                </p>
              </Card>
              <Card className="p-8 text-center">
                <div className="text-4xl mb-4">💡</div>
                <h4 className="text-xl font-bold mb-3">Наши ценности</h4>
                <p className="text-muted-foreground">
                  Честность, профессионализм и клиентоориентированность
                </p>
              </Card>
              <Card className="p-8 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-xl font-bold mb-3">Наша цель</h4>
                <p className="text-muted-foreground">
                  Стать лучшей веб-студией в России к 2025 году
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section id="blog" className="py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Блог</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Делимся опытом и знаниями
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {blogPosts.map((post, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden hover-lift cursor-pointer group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-3">{post.date}</div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Button variant="link" className="p-0">
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                Все статьи блога
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Свяжитесь с нами удобным способом
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-8">
                <Card className="p-6 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Телефон</h4>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      <p className="text-muted-foreground">+7 (800) 555-35-35</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Email</h4>
                      <p className="text-muted-foreground">info@parlament.ru</p>
                      <p className="text-muted-foreground">sales@parlament.ru</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Адрес офиса</h4>
                      <p className="text-muted-foreground">г. Москва, ул. Тверская, д. 1</p>
                      <p className="text-muted-foreground">БЦ "Парламент", 5 этаж</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Режим работы</h4>
                      <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                      <p className="text-muted-foreground">Сб-Вс: выходной</p>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="ivan@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input type="tel" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите о вашем проекте..."
                      rows={5}
                    />
                  </div>
                  <Button size="lg" className="w-full">
                    Отправить сообщение
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Парламент</h3>
              <p className="text-white/80">
                Создаем сайты, которые работают на ваш бизнес
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-primary transition-colors">Разработка сайтов</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Веб-дизайн</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">SEO продвижение</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Техподдержка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Портфолио</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/60">
            <p>© 2024 Парламент. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
