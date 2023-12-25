import React, { useEffect, useState } from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import axios from 'axios';

const Experience = () => {
  const [categories, setCategories] = useState([]);
  const [experiencesByCategory, setExperiencesByCategory] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/api/category')
      .then(res => {
        setCategories(res.data);
        res.data.forEach(category => fetchExperiencesByCategory(category.id));
      })
      .catch(err => console.log(err.message));
  }, []);

  const fetchExperiencesByCategory = async (categoryId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/experienceCategory/${categoryId}`);
      setExperiencesByCategory(prevExperiences => ({
        ...prevExperiences,
        [categoryId]: response.data
      }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section id='experience'>
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        {categories.map(category => (
          <div className="" key={category.id} >
            <h3>{category.username}</h3>
            {experiencesByCategory[category.id] && (
              <div className="experience_content">
                {experiencesByCategory[category.id].map(experience => (
                  <article className="experience_detail" key={experience.id}>
                    <BsPatchCheckFill className='experience_icon' />
                    <div>
                      <h4>{experience.name}</h4>
                      <small className="text-light">
                        Experied
                      </small>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
