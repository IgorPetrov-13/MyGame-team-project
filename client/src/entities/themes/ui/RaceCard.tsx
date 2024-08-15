import React, { useState } from 'react';
import type { RaceType } from '../types/raceType';
import { useAppDispatch } from '../../../app/providers/store/store';
import { deleteRaces, updateRaces } from '../model/raceSlice';

function RaceCard({ raceCard }: { raceCard: RaceType }): JSX.Element {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [formData, setFormData] = useState(raceCard);

  const dispatch = useAppDispatch();

  const handleSave = (id: number): void => {
    dispatch(updateRaces({ id, form: formData }))
      .then(() => setIsEditing(false))
      .catch(console.log);
  };

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

  const onDeleteHandler = (id: number): void => {
    dispatch(deleteRaces(id)).catch(console.log);
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
              <button type="button" onClick={() => handleSave(formData.id)}>
                Save
              </button>
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
        <button type="button" onClick={() => onDeleteHandler(formData.id)}>
          Удалить{' '}
        </button>
      </div>
    </div>
  );
}

export default RaceCard;
