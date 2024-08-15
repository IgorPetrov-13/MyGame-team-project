import React, { useState } from 'react';

import { useAppDispatch } from '../../../app/providers/store/store';
import { ThemeType } from '../types/themeType';


function ThemeCard({ themeCard }: { themeCard: ThemeType }): JSX.Element {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [formData, setFormData] = useState(themeCard);
  const dispatch = useAppDispatch();

  
  const handleEdit = (): void => {
    setIsEditing(true);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          {isEditing ? (
            <div>
              <input type="text" name="title" value={formData.title} onChange={handleChange} />
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
             
            </div>
          ) : (
            <>
              <h5 className="card-title">{formData.title}</h5>
              <p className="card-text">{formData.description}</p>
              <button type="button" onClick={handleEdit}>
                Обновить
              </button>
            </>
          )}
        </div>
        
      </div>
    </div>
  );
}

export default ThemeCard;
