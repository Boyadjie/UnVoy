'use client';

import {useState} from 'react';

import dynamic from 'next/dynamic';

import {Navbar} from '../../src/components/navbar/Navbar';
import styles from './page.module.css';
const DynamicMapComponent = dynamic(
  () => import('../../src/components/map/MapComponent'),
  {ssr: false},
);

export default function Map() {
  const [inputValue, setInputValue] = useState<string>('');
  const [submittedQuestion, setSubmittedQuestion] = useState<string | null>(
    null,
  );
  const [markerData, setMarkerData] = useState<MarkerData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = async () => {
    setLoading(true);
    try {
      setSubmittedQuestion(inputValue);
      setInputValue('');

      const response = await fetch('/api/coordinates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({value: inputValue}),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      let data;
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        const text = await response.text();
        console.error('Received non-JSON response:', text);
        throw new Error('Received non-JSON response');
      }

      setMarkerData(data);
    } catch (error) {
      console.error('Error in handleSubmit:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div id={styles.map}>
        <Navbar />
        <section className={styles.layout}>
          <div className={styles.layoutTop}>
            <div className={styles.layoutMenu}>
              <div>
                <div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      width: '100vw',
                      gap: '10px',
                      justifyContent: 'center',
                    }}
                  >
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      className={styles.input}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') handleSubmit();
                      }}
                    />
                    <button onClick={handleSubmit} className={styles.goButton}>
                      Search
                    </button>
                  </div>
                  {submittedQuestion && (
                    <div>
                      <p>Results for: "{submittedQuestion}"</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.mapContentContainer}>
          <DynamicMapComponent
            inputValue={inputValue}
            setInputValue={setInputValue}
            submittedQuestion={submittedQuestion}
            setSubmittedQuestion={setSubmittedQuestion}
            markerData={markerData}
            setMarkerData={setMarkerData}
            loading={loading}
            setLoading={setLoading}
          />
        </div>
      </div>
    </>
  );
}
