'use client'

import { motion } from 'framer-motion'
import { Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react'
import Link from 'next/link'

const BlogList = () => {
  const articles = [
    {
      id: 'beneficiile-somatic-breathwork',
      title: 'Beneficiile Somatic Breathwork pentru sănătatea mentală',
      excerpt: 'Descoperă cum tehnica de respirație conștientă poate transforma sănătatea ta mentală și poate reduce stresul zilnic într-un mod natural și eficient.',
      author: 'Alexandru Popescu',
      date: '15 Decembrie 2024',
      readTime: '8 min',
      category: 'Somatic Breathwork',
      image: '/images/blog/somatic-breathwork.jpg',
      featured: true
    },
    {
      id: 'cum-te-ajuta-pilatesul-la-postura-zilnica',
      title: 'Cum te ajută Pilatesul la postura zilnică',
      excerpt: 'Învață cum exercițiile de Pilates pot îmbunătăți postura ta zilnică și pot reduce durerile de spate cauzate de stilul de viață sedentar.',
      author: 'Maria Ionescu',
      date: '10 Decembrie 2024',
      readTime: '6 min',
      category: 'Pilates',
      image: '/images/blog/pilates-posture.jpg',
      featured: false
    },
    {
      id: 'tehnici-de-respiratie-pentru-relaxare',
      title: '5 tehnici de respirație pentru relaxare profundă',
      excerpt: 'Descoperă tehnici simple de respirație pe care le poți practica acasă pentru a reduce stresul și a îmbunătăți calitatea somnului.',
      author: 'Alexandru Popescu',
      date: '5 Decembrie 2024',
      readTime: '5 min',
      category: 'Wellness',
      image: '/images/blog/breathing-techniques.jpg',
      featured: false
    },
    {
      id: 'pilates-pentru-seniori-beneficii-si-tehnici',
      title: 'Pilates pentru seniori: beneficii și tehnici adaptate',
      excerpt: 'Află cum Pilatesul poate îmbunătăți mobilitatea, echilibrul și calitatea vieții la vârsta a treia prin exerciții adaptate și sigure.',
      author: 'Elena Stoica',
      date: '1 Decembrie 2024',
      readTime: '7 min',
      category: 'Pilates',
      image: '/images/blog/pilates-seniors.jpg',
      featured: false
    },
    {
      id: 'alimentatie-pentru-wellness-si-energie',
      title: 'Alimentația pentru wellness și energie optimă',
      excerpt: 'Descoperă cum alimentația potrivită poate spori energia ta și poate susține practica de Pilates și Somatic Breathwork.',
      author: 'Maria Ionescu',
      date: '25 Noiembrie 2024',
      readTime: '9 min',
      category: 'Nutriție',
      image: '/images/blog/nutrition-wellness.jpg',
      featured: false
    },
    {
      id: 'reducerea-stresului-prin-mișcare-conștientă',
      title: 'Reducerea stresului prin mișcare conștientă',
      excerpt: 'Învață cum mișcarea conștientă și exercițiile de Pilates pot fi instrumente puternice pentru gestionarea stresului zilnic.',
      author: 'Cristian Marin',
      date: '20 Noiembrie 2024',
      readTime: '6 min',
      category: 'Wellness',
      image: '/images/blog/stress-reduction.jpg',
      featured: false
    }
  ]

  const categories = ['Toate', 'Pilates', 'Somatic Breathwork', 'Wellness', 'Nutriție']

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-800 mb-6">
            Articole recente
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Explorează colecția noastră de articole despre wellness, Pilates și 
            Somatic Breathwork, scrise de experții noștri certificați.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                category === 'Toate'
                  ? 'bg-accent-600 text-white shadow-lg'
                  : 'bg-primary-100 text-primary-700 hover:bg-accent-100 hover:text-accent-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-accent-600 to-accent-700 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Tag className="w-4 h-4" />
                  <span>Articol recomandat</span>
                </div>
                <h3 className="text-3xl font-playfair font-bold mb-4">
                  {articles[0].title}
                </h3>
                <p className="text-accent-100 mb-6 leading-relaxed">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center space-x-6 text-sm text-accent-200 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{articles[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{articles[0].date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{articles[0].readTime}</span>
                  </div>
                </div>
                <Link
                  href={`/blog/${articles[0].id}`}
                  className="bg-white text-accent-600 px-6 py-3 rounded-xl font-medium hover:bg-accent-50 transition-colors duration-300 inline-flex items-center group"
                >
                  Citește articolul complet
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-3xl">SB</span>
                  </div>
                  <p className="text-white text-lg">Somatic Breathwork</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 group hover:scale-105 transition-all duration-300"
            >
              {/* Article Image */}
              <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl h-48 flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-xl">
                      {article.category.charAt(0)}
                    </span>
                  </div>
                  <p className="text-primary-600 text-sm">{article.category}</p>
                </div>
              </div>

              {/* Article Content */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>

                <h3 className="text-xl font-playfair font-semibold text-primary-800 group-hover:text-accent-600 transition-colors duration-300">
                  {article.title}
                </h3>

                <p className="text-primary-600 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center space-x-4 text-sm text-primary-500">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <div className="text-sm text-primary-500">
                  {article.date}
                </div>

                <Link
                  href={`/blog/${article.id}`}
                  className="inline-flex items-center text-accent-600 font-medium hover:text-accent-700 transition-colors duration-300 group-hover:translate-x-1"
                >
                  Citește mai mult
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-100 to-accent-100 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-playfair font-bold text-primary-800 mb-4">
              Abonează-te la newsletter
            </h3>
            <p className="text-xl text-primary-600 mb-8 max-w-2xl mx-auto">
              Primește articole noi despre wellness și Pilates direct în inbox-ul tău. 
              Fără spam, doar conținut de calitate.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Adresa ta de email"
                className="flex-1 px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-accent-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-accent-700 transition-colors duration-300"
              >
                Abonează-te
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogList
