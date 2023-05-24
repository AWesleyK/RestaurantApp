import React, { useState, useEffect } from 'react';
import styles from './MenuItemForm.module.scss'
import { useRouter } from 'next/router';

const MenuItemForm = () => {
  const [formData, setFormData] = useState({
    menu: '',
    name: '',
    price: '',
    detail: '',
    isActive: true,
    image: '',
    addOns: [{ addOn: '', addOnPrice: '' }],
    subtractions: [{ subtraction: '' }],
  });

const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file.name });
      // You will need to handle the actual file upload to the public folder
    }
  };

  const [menuTypes, setMenuTypes] = useState([]);

  useEffect(() => {
    const fetchMenuTypes = async () => {
      try {
        const response = await fetch('../api/menu-types');
        if (response.ok) {
          const { data } = await response.json();
          setMenuTypes(data);
        } else {
          console.error('Error fetching menu types:', response.status, await response.text());
        }
      } catch (error) {
        console.error('Error fetching menu types:', error);
      }
    };
  
    fetchMenuTypes();
  }, []);
  
  
  const handleAddOnsChange = (index, field, value) => {
    const newAddOns = [...formData.addOns];
    newAddOns[index][field] = value;
    setFormData({ ...formData, addOns: newAddOns });
  };
  
  const addAddOn = () => {
    setFormData({ ...formData, addOns: [...formData.addOns, { addOn: '', addOnPrice: '' }] });
  };
  
  const handleSubtractionsChange = (index, value) => {
    const newSubtractions = [...formData.subtractions];
    newSubtractions[index].subtraction = value;
    setFormData({ ...formData, subtractions: newSubtractions });
  };
  
  const addSubtraction = () => {
    setFormData({ ...formData, subtractions: [...formData.subtractions, { subtraction: '' }] });
  };

  const removeAddOn = (index) => {
    setFormData((prev) => {
      const newAddOns = [...prev.addOns];
      newAddOns.splice(index, 1);
      return { ...prev, addOns: newAddOns };
    });
  };
  
  const removeSubtraction = (index) => {
    setFormData((prev) => {
      const newSubtractions = [...prev.subtractions];
      newSubtractions.splice(index, 1);
      return { ...prev, subtractions: newSubtractions };
    });
  };

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('../api/add-menu-item', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, dateAdded: new Date().toISOString() }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        alert('Menu item added successfully.');
        router.push('/admin/menu'); // Redirect to the admin menu page
        router.reload(); // Force a refresh
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}. Status: ${error.status}. Text: ${error.statusText}`);

    }
  };
  
  

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="menu">Menu Type:</label>
      <select
        id="menu"
        value={formData.menu}
        onChange={(e) => setFormData({ ...formData, menu: e.target.value })}
      >
        <option value="">Select a menu type</option>
        {menuTypes.map((menuType, index) => (
          <option key={index} value={menuType}>
            {menuType}
          </option>
        ))}
      </select>
  
      <label htmlFor="name">Item Name:</label>
      <input
        type="text"
        id="name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
  
      <label htmlFor="price">Item Price:</label>
      <input
        type="number"
        id="price"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
      />
  
      <label htmlFor="detail">Item Detail:</label>
      <input
        type="text"
        id="detail"
        value={formData.detail}
        onChange={(e) => setFormData({ ...formData, detail: e.target.value })}
      />
  
      <label htmlFor="isActive">Is Active:</label>
      <select
        id="isActive"
        value={formData.isActive}
        onChange={(e) => setFormData({ ...formData, isActive: e.target.value === 'true' })}
      >
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
  
      <label htmlFor="image">Image:</label>
      <input type="file" id="image" onChange={handleImageUpload} />
  
      <div>
        <h3>Add Ons</h3>
        {formData.addOns.map((addOn, index) => (
          <div key={index}>
            <label htmlFor={`addOn${index}`}>Add On:</label>
            <input
              type="text"
              id={`addOn${index}`}
              value={addOn.addOn}
              onChange={(e) => handleAddOnsChange(index, 'addOn', e.target.value)}
            />
  
            <label htmlFor={`addOnPrice${index}`}>Add On Price:</label>
            <input
              type="number"
              id={`addOnPrice${index}`}
              value={addOn.addOnPrice}
              onChange={(e) => handleAddOnsChange(index, 'addOnPrice', parseFloat(e.target.value))}
            />
  
            {index !== 0 && (
              <button type="button" onClick={() => removeAddOn(index)}>
                -
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={addAddOn}>+</button>
      </div>
  
      <div>
        <h3>Subtractions</h3>
        {formData.subtractions.map((subtraction, index) => (
          <div key={index}>
            <label htmlFor={`subtraction${index}`}>Subtraction:</label>
            <input
              type="text"
              id={`subtraction${index}`}
              value={subtraction.subtraction}
              onChange={(e) => handleSubtractionsChange(index, e.target.value)}
            />
  
            {index !== 0 && (
              <button type="button" onClick={() => removeSubtraction(index)}>
                -
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={addSubtraction}>+</button>
      </div>
  
      <button type="submit">Add Menu Item</button>
  
      </form>
    );
  };
  

export default MenuItemForm;
