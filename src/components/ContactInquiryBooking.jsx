import { useState } from 'react';
import AtelierIcon from './AtelierIcon';
import { Effect, Effects } from './animate-ui/Effect';
import Shine from './animate-ui/Shine';
import styles from './ContactInquiryBooking.module.css';

const initialState = {
  name: '',
  email: '',
  projectType: '',
  message: '',
};

function ContactInquiryBooking({ calendar, projectTypes }) {
  const [formState, setFormState] = useState({
    ...initialState,
    projectType: projectTypes[0] || '',
  });
  const [selectedTime, setSelectedTime] = useState(calendar.selectedTime);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={styles.section}>
      <div className={`wideContainer ${styles.layout}`}>
        <Effect animateWhenInView as="div" blur="10px" className={styles.formColumn} slide="right">
          <Effects animateWhenInView blur="8px" holdDelay={0.06} slide="up" step={0.12}>
            <div className={styles.headingBlock}>
              <h2>General Inquiries</h2>
              <div className={styles.rule} />
            </div>
          </Effects>

          <form className={styles.form} onSubmit={handleSubmit}>
            <Effects animateWhenInView blur="8px" holdDelay={0.08} slide="up" step={0.08}>
              <div className={styles.formGrid}>
                <div className={styles.field}>
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    onChange={handleChange}
                    placeholder="Alexander Swar"
                    required
                    type="text"
                    value={formState.name}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    name="email"
                    onChange={handleChange}
                    placeholder="atelier@luxury.com"
                    required
                    type="email"
                    value={formState.email}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-project-type">Project Type</label>
                <div className={styles.selectWrap}>
                  <select
                    id="contact-project-type"
                    name="projectType"
                    onChange={handleChange}
                    value={formState.projectType}
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-message">Details of your vision</label>
                <textarea
                  id="contact-message"
                  name="message"
                  onChange={handleChange}
                  placeholder="Describe the piece, the fabrics, and the story..."
                  required
                  rows="4"
                  value={formState.message}
                />
              </div>

              {submitted ? (
                <div className={styles.notice} role="status">
                  Demo mode: your inquiry form is structured and ready for future submission
                  handling.
                </div>
              ) : null}

              <div className={styles.submitWrap}>
                <Shine
                  className={styles.shineWrap}
                  delay={200}
                  duration={1200}
                  loop
                  loopDelay={2600}
                  opacity={0.14}
                >
                  <button className={styles.submitButton} type="submit">
                    Send Inquiry
                    <AtelierIcon className={styles.submitIcon} name="north_east" />
                  </button>
                </Shine>
              </div>
            </Effects>
          </form>
        </Effect>

        <Effect
          animateWhenInView
          blur="10px"
          className={styles.calendarShell}
          delay={0.12}
          slide="left"
        >
          <div className={styles.paperOverlay} />
          <div className={styles.calendarContent}>
            <Effects animateWhenInView blur="8px" holdDelay={0.06} slide="up" step={0.12}>
              <div className={styles.headingBlock}>
                <h2>Book a Consultation</h2>
                <p>Secure a private design session with our lead consultant.</p>
              </div>
            </Effects>

            <Effect animateWhenInView as="div" delay={0.2} slide="up">
              <div className={styles.calendarCard}>
              <div className={styles.calendarHeader}>
                <h3>{calendar.month}</h3>
                <div className={styles.calendarControls}>
                  <AtelierIcon name="chevron_left" />
                  <AtelierIcon name="chevron_right" />
                </div>
              </div>

              <div className={styles.weekdayRow}>
                {calendar.weekdays.map((day) => (
                  <span key={day}>{day}</span>
                ))}
              </div>

              <div className={styles.daysGrid}>
                {calendar.days.map((day) => (
                  <span
                    className={`${styles.dayCell} ${day.muted ? styles.dayMuted : ''} ${
                      day.outlined ? styles.dayOutlined : ''
                    } ${day.selected ? styles.daySelected : ''}`}
                    key={`${day.label}-${day.muted ? 'muted' : 'active'}`}
                  >
                    {day.label}
                  </span>
                ))}
              </div>

              <div className={styles.timesBlock}>
                <label>Available Times (GMT)</label>
                <div className={styles.timeButtons}>
                  {calendar.times.map((time) => (
                    <button
                      className={`${styles.timeButton} ${
                        selectedTime === time ? styles.timeSelected : ''
                      }`}
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      type="button"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            </Effect>
          </div>
        </Effect>
      </div>
    </section>
  );
}

export default ContactInquiryBooking;
