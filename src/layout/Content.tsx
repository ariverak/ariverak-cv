import React from 'react'
import { Avatar, Divider } from '@nextui-org/react'
import { GraduationCap, Laptop } from 'lucide-react'

export interface ContentProps {
  title: string
  subtitle: string
  education: {
    university: string
    yearsBetween: number[]
    career: string
  }[]
  experience: {
    workplace: string
    yearsBetween: (number | string)[]
    description: string
    logo: string
    link?: string
  }[]
}

const Content: React.FC<ContentProps> = ({
  title,
  subtitle,
  education,
  experience,
}) => {
  return (
    <div className="flex-1 bg-white px-8 pt-24">
      <h1 className="text-5xl font-bold">{title}</h1>
      <h2 className="text-2xl font-semibold">{subtitle}</h2>
      <Divider className="my-4" />
      {/* education */}
      <h3 className="mb-2 flex items-center text-lg font-semibold">
        <GraduationCap size={24} className="mr-2" />
        Educación
      </h3>
      {education.map((edu, index) => (
        <div key={index} className="my-4">
          <h4 className="text-lg font-bold">{edu.university}</h4>
          <p className="text-sm font-semibold">{edu.career}</p>
          <p className="text-xs text-gray-500">
            {edu.yearsBetween[0]} - {edu.yearsBetween[1]}
          </p>
        </div>
      ))}
      <Divider className="my-4" />
      {/* profesional experience */}
      <h3 className="mb-2 flex items-center text-lg font-semibold">
        <Laptop size={24} className="mr-2" />
        Experiencia Profesional
      </h3>
      {experience.map((exp, index) => (
        <div key={index} className="my-4 flex items-center">
          <Avatar
            src={exp.logo}
            isBordered
            classNames={{
              base: 'bg-white',
            }}
          />
          <div className="ml-4">
            <a href={exp.link} target="_blank" rel="noreferrer">
              <h4 className="text-lg font-bold">{exp.workplace}</h4>
            </a>
            <p className="text-sm font-semibold">{exp.description}</p>
            <p className="text-xs text-gray-500">
              {exp.yearsBetween[0]} - {exp.yearsBetween[1]}
            </p>
          </div>
        </div>
      ))}
      <Divider className="my-4" />
    </div>
  )
}

export default Content