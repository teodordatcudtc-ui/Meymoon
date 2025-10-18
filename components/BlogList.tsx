'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, User, Clock, ArrowRight, Tag, BookOpen } from 'lucide-react'

const BlogList = () => {

  const blogPosts = [
    {
      id: 'beneficiile-pilatesului-in-bucuresti',
      title: 'Beneficiile Pilates-ului în București: De ce să alegi un studio local',
      excerpt: 'Descoperă de ce Pilates-ul este perfect pentru viața urbană din București și cum te poate ajuta să reduci stresul zilnic.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Pilates',
      author: 'Maria Popescu',
      date: '2024-01-15',
      readTime: '5 min',
      tags: ['Pilates', 'București', 'Wellness', 'Stres'],
      featured: true,
    },
    {
      id: 'ce-este-somatic-breathwork',
      title: 'Ce este Somatic Breathwork și cum te poate transforma viața',
      excerpt: 'Explorează tehnica transformatoare de respirație conștientă care îți poate aduce liniștea interioară și echilibrul.',
      image: 'https://images.unsplash.com/photo-1506905925346-14b1e5d07187?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Somatic Breathwork',
      author: 'Elena Dumitrescu',
      date: '2024-01-10',
      readTime: '7 min',
      tags: ['Somatic Breathwork', 'Respirație', 'Relaxare', 'Meditație'],
      featured: false,
    },
    {
      id: 'pilates-pentru-incepatori',
      title: 'Pilates pentru Începători: Ghidul Complet de Început',
      excerpt: 'Tot ce trebuie să știi despre Pilates dacă ești începător. De la echipament la exerciții de bază.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Pilates',
      author: 'Alexandru Ionescu',
      date: '2024-01-05',
      readTime: '6 min',
      tags: ['Pilates', 'Începători', 'Ghid', 'Exerciții'],
      featured: false,
    },
    {
      id: 'reducera-stresului-prin-miscare',
      title: 'Cum să reduci stresul prin mișcarea conștientă',
      excerpt: 'Tehnici practice pentru a gestiona stresul zilnic prin Pilates și Somatic Breathwork.',
      image: 'https://images.unsplash.com/photo-1506905925346-14b1e5d07187?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Wellness',
      author: 'Maria Popescu',
      date: '2023-12-28',
      readTime: '8 min',
      tags: ['Stres', 'Mișcare', 'Wellness', 'Sănătate'],
      featured: false,
    },
    {
      id: 'echipament-pilates-ghid',
      title: 'Ghidul Complet pentru Echipamentul de Pilates',
      excerpt: 'Tot ce trebuie să știi despre echipamentul de Pilates: de la covoraș la Reformer.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Pilates',
      author: 'Alexandru Ionescu',
      date: '2023-12-20',
      readTime: '9 min',
      tags: ['Echipament', 'Pilates', 'Reformer', 'Ghid'],
      featured: false,
    },
    {
      id: 'beneficiile-respiratiei-constiente',
      title: 'Beneficiile Respirației Conștiente pentru Sănătatea Mentală',
      excerpt: 'Cum tehnica de respirație conștientă îți poate îmbunătăți starea mentală și emoțională.',
      image: 'https://images.unsplash.com/photo-1506905925346-14b1e5d07187?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Somatic Breathwork',
      author: 'Elena Dumitrescu',
      date: '2023-12-15',
      readTime: '6 min',
      tags: ['Respirație', 'Sănătate Mentală', 'Somatic Breathwork', 'Wellness'],
      featured: false,
    },
  ]

  const categories = ['Toate', 'Pilates', 'Somatic Breathwork', 'Wellness']
  const [activeCategory, setActiveCategory] = useState('Toate')

  const filteredPosts = activeCategory === 'Toate' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory)

  const featuredPost = filteredPosts.find(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <BookOpen className="w-4 h-4" />
            <span>Articole Recente</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6"
          >
            Explorează
            <span className="block text-gradient">Articolele Noastre</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
          >
            Descoperă sfaturi practice, tehnici de Pilates și ghiduri despre wellness 
            pentru a-ți îmbunătăți stilul de viață.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={itemVariants}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-blue-100 hover:text-blue-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mb-16"
          >
            <motion.div
              variants={itemVariants}
              className="card overflow-hidden group hover:scale-105 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Articol Recomandat
                    </span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center space-x-2 text-sm text-neutral-500">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString('ro-RO')}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold text-neutral-900 mb-4 group-hover:text-blue-500 transition-colors">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-neutral-500">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={`/blog/${featuredPost.id}`}
                    className="btn-primary inline-flex items-center group w-fit"
                  >
                    Citește Articolul
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Regular Posts */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {regularPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="group"
            >
              <div className="card overflow-hidden h-full group-hover:scale-105 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-neutral-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('ro-RO')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-blue-500 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-neutral-600 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-sm text-neutral-500">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="bg-neutral-100 text-neutral-600 px-2 py-1 rounded text-xs font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-blue-500 hover:text-blue-600 font-medium inline-flex items-center group"
                  >
                    Citește mai mult
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center"
          >
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Vrei să înveți mai multe despre Pilates?
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Rezervă-ți prima clasă gratuită și descoperă personal beneficiile 
              Pilates-ului și Somatic Breathwork-ului.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/programari"
                className="bg-white text-blue-500 hover:bg-blue-50 px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center justify-center"
              >
                Rezervă Prima Clasă Gratuită
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-500 px-8 py-4 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center"
              >
                Contactează-ne
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogList
