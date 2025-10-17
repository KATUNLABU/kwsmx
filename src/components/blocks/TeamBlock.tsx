'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { Card, Typography, Container, Badge } from '@/components';

interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  image: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    email?: string;
  };
  skills?: string[];
  highlighted?: boolean;
}

interface TeamBlockProps {
  title?: string;
  subtitle?: string;
  members: TeamMember[];
  layout?: '2-column' | '3-column' | '4-column' | 'grid-masonry';
  variant?: 'cards' | 'minimal' | 'overlay';
  className?: string;
  animated?: boolean;
}

export default function TeamBlock({
  title,
  subtitle,
  members,
  layout = '3-column',
  variant = 'cards',
  className,
  animated = true
}: TeamBlockProps) {
  const layoutClasses = {
    '2-column': 'grid-cols-1 md:grid-cols-2',
    '3-column': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    '4-column': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    'grid-masonry': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  };

  const SocialIcon = ({ platform, url }: { platform: string; url: string }) => {
    const icons = {
      twitter: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      linkedin: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      github: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      email: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    };

    return (
      <a
        href={platform === 'email' ? `mailto:${url}` : url}
        target={platform === 'email' ? '_self' : '_blank'}
        rel={platform === 'email' ? '' : 'noopener noreferrer'}
        className="text-gray-400 hover:text-blue-600 transition-colors"
      >
        {icons[platform as keyof typeof icons]}
      </a>
    );
  };

  const MemberCard = ({ member, index }: { member: TeamMember; index: number }) => {
    const cardContent = (
      <div className="group">
        {variant === 'cards' ? (
          <Card className={cn(
            'overflow-hidden h-full transition-all duration-300 hover:shadow-xl',
            member.highlighted && 'ring-2 ring-blue-500'
          )}>
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <Typography variant="h5" className="mb-1">
                {member.name}
              </Typography>
              <Typography variant="p" color="accent" className="mb-3 font-medium">
                {member.role}
              </Typography>
              
              {member.bio && (
                <Typography variant="p" color="secondary" className="mb-4 text-sm leading-relaxed">
                  {member.bio}
                </Typography>
              )}

              {/* Skills */}
              {member.skills && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.skills.slice(0, 3).map((skill, skillIndex) => (
                    <Badge key={skillIndex} size="sm" variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                  {member.skills.length > 3 && (
                    <Badge size="sm" variant="secondary">
                      +{member.skills.length - 3}
                    </Badge>
                  )}
                </div>
              )}

              {/* Social Links */}
              {member.social && (
                <div className="flex space-x-3">
                  {Object.entries(member.social).map(([platform, url]) => (
                    <SocialIcon key={platform} platform={platform} url={url} />
                  ))}
                </div>
              )}
            </div>
          </Card>
        ) : variant === 'minimal' ? (
          <div className="text-center group">
            <div className="relative inline-block mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mx-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <Typography variant="h5" className="mb-1">
              {member.name}
            </Typography>
            <Typography variant="p" color="accent" className="mb-3 font-medium">
              {member.role}
            </Typography>
            {member.bio && (
              <Typography variant="small" color="secondary" className="mb-4">
                {member.bio}
              </Typography>
            )}
            {member.social && (
              <div className="flex justify-center space-x-3">
                {Object.entries(member.social).map(([platform, url]) => (
                  <SocialIcon key={platform} platform={platform} url={url} />
                ))}
              </div>
            )}
          </div>
        ) : (
          // Overlay variant
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <Typography variant="h5" className="mb-1 text-white">
                  {member.name}
                </Typography>
                <Typography variant="p" className="mb-3 text-blue-300 font-medium">
                  {member.role}
                </Typography>
                {member.social && (
                  <div className="flex space-x-3">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={platform === 'email' ? `mailto:${url}` : url}
                        target={platform === 'email' ? '_self' : '_blank'}
                        rel={platform === 'email' ? '' : 'noopener noreferrer'}
                        className="text-white/80 hover:text-white transition-colors"
                      >
                        <SocialIcon platform={platform} url={url} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );

    if (!animated) {
      return cardContent;
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        {cardContent}
      </motion.div>
    );
  };

  return (
    <Container className={className}>
      {(title || subtitle) && (
        <motion.div
          initial={animated ? { opacity: 0, y: 20 } : {}}
          whileInView={animated ? { opacity: 1, y: 0 } : {}}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {title && (
            <Typography variant="h2" className="mb-4">
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography variant="lead" color="secondary" className="max-w-3xl mx-auto">
              {subtitle}
            </Typography>
          )}
        </motion.div>
      )}

      <div className={cn('grid gap-8', layoutClasses[layout])}>
        {members.map((member, index) => (
          <MemberCard key={index} member={member} index={index} />
        ))}
      </div>
    </Container>
  );
}
