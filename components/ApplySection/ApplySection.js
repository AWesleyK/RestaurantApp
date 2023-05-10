import React, { useState } from 'react';
import styles from './ApplySection.module.scss';

const ApplySection = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [resume, setResume] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission logic here, e.g., send data to the server
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Resume:', resume);

    // Convert the resume file to base64
    const reader = new FileReader();
    reader.readAsDataURL(resume);
    reader.onloadend = async () => {
      const base64Data = reader.result.split(',')[1];

      // Send a POST request to the API route
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          attachment: {
            name: resume.name,
            type: resume.type,
            content: base64Data,
          },
        }),
      });

      if (response.ok) {
        console.log('Email sent successfully');
      } else {
        console.error('Error sending email:', response.status);
      }
    };
  };

  const handleResumeChange = (event) => {
    setResume(event.target.files[0]);
  };

  return (
    <section className={styles.applySection}>
      <h2 className={styles.applyHeading}>Apply</h2>
      <form onSubmit={handleSubmit} className={styles.applyForm}>
        <div className={styles.nameInputGroup}>
          <div className={styles.namePair}>
            <label htmlFor="firstName" className={styles.nameLabel}>
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              className={styles.fNameInput}
            />
          </div>
          <div className={styles.namePair}>
            <label htmlFor="lastName" className={styles.nameLabel}>
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              className={styles.lNameInput}
            />
          </div>
        </div>
        <label htmlFor="resume" className={styles.resumeLabel}>
          Upload Resume:
        </label>
        <input
          type="file"
          id="resume"
          accept=".pdf,.
          .doc,.docx"
          onChange={handleResumeChange}
          className={styles.resumeInput}
        />
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default ApplySection;
