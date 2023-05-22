import React, { useState, useEffect } from 'react';
import styles from './MenuAdmin.module.scss';
import MenuItemForm from './MenuItemForm';



const MenuAdmin = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  // Fetch menu data and set the state
  useEffect(() => {
     const fetchData = async () => {
      try {
        const response = await fetch('../api/menu');
        if (response.ok) {
          const { data } = await response.json();
          setMenuItems(data);
        } else {
          console.error('Error fetching menu data:', response.status, await response.text());
        }
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    };

    fetchData();
  }, []);

  if (!menuItems.length) {
    return <div>Loading...</div>;
  }

  const handleEdit = (item) => {
    setCurrentItem(item);
    setShowModal(true);
  };

  const handleDelete = (item) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      // Perform the actual deletion here
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const updateItem = (updatedItem) => {
    // Update the item in the database and close the modal
    setShowModal(false);
  };

  return (
    
    <div>
        <div>
  <h2 className={styles.headers}>Add New Menu Item</h2>
  <MenuItemForm />
</div>
<h2  className={styles.headers}>Edit Existing Menu Items</h2>
      {menuItems.map((menuItem) =>
  menuItem.items.map((item) => (
    <div className={styles.tableRow} key={item._id}>
      <div className={styles.itemContainer}>
        {Object.entries(item).map(([key, value]) => (
          <div key={key} className={styles.itemProperty}>
            {key}: {value.toString()}
          </div>
        ))}
      </div>
      <div className={styles.buttonsContainer}>
        <button onClick={() => handleEdit(item)}>Edit</button>
        <button onClick={() => handleDelete(item)}>Delete</button>
      </div>
    </div>
  ))
)}


      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Edit Item</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              {/* Create input fields for each property in currentItem */}
              {/* Example: */}
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={currentItem.name}
                onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })}
              />
              {/* Repeat for all other properties */}
            </form>
            <div>
              <button onClick={() => updateItem(currentItem)}>Update</button>
              <button onClick={closeModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuAdmin;
