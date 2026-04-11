import { useEffect, useMemo, useState } from 'react';
import { DayPicker } from 'react-day-picker';
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

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function addDays(date, amount) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return startOfDay(next);
}

function addMonths(date, amount) {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}

function isSameDay(left, right) {
  return (
    left.getFullYear() === right.getFullYear() &&
    left.getMonth() === right.getMonth() &&
    left.getDate() === right.getDate()
  );
}

function formatDateKey(date) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function findFirstAvailableDate(month, isDateDisabled) {
  const cursor = new Date(month.getFullYear(), month.getMonth(), 1);
  const end = new Date(month.getFullYear(), month.getMonth() + 1, 0);

  while (cursor <= end) {
    if (!isDateDisabled(cursor)) {
      return new Date(cursor);
    }

    cursor.setDate(cursor.getDate() + 1);
  }

  return null;
}

function ContactInquiryBooking({ calendar, projectTypes }) {
  const today = useMemo(() => startOfDay(new Date()), []);
  const minDate = useMemo(
    () => addDays(today, calendar.minAdvanceDays ?? 1),
    [calendar.minAdvanceDays, today],
  );
  const maxDate = useMemo(
    () => new Date(today.getFullYear(), today.getMonth() + (calendar.maxAdvanceMonths ?? 6) + 1, 0),
    [calendar.maxAdvanceMonths, today],
  );
  const initialMonth = useMemo(
    () => addMonths(new Date(today.getFullYear(), today.getMonth(), 1), calendar.initialMonthOffset ?? 0),
    [calendar.initialMonthOffset, today],
  );
  const blockedDates = calendar.blockedDates ?? [];
  const weekdaySlots = calendar.weekdaySlots ?? {};
  const specialSlots = calendar.specialSlots ?? {};

  const [formState, setFormState] = useState({
    ...initialState,
    projectType: projectTypes[0] || '',
  });
  const [month, setMonth] = useState(initialMonth);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const monthLabel = useMemo(
    () =>
      new Intl.DateTimeFormat('en-CA', {
        month: 'long',
        year: 'numeric',
      }).format(month),
    [month],
  );

  const isDateDisabled = (date) => {
    const day = startOfDay(date);
    const key = formatDateKey(day);
    const slots = specialSlots[key] ?? weekdaySlots[day.getDay()] ?? [];

    return day < minDate || day > maxDate || blockedDates.includes(key) || slots.length === 0;
  };

  const availableTimes = useMemo(() => {
    if (!selectedDate) {
      return [];
    }

    const key = formatDateKey(selectedDate);
    return specialSlots[key] ?? weekdaySlots[selectedDate.getDay()] ?? [];
  }, [selectedDate, specialSlots, weekdaySlots]);

  const selectedDateLabel = useMemo(() => {
    if (!selectedDate) {
      return 'Select a consultation day';
    }

    return new Intl.DateTimeFormat('en-CA', {
      weekday: 'short',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(selectedDate);
  }, [selectedDate]);

  useEffect(() => {
    const firstAvailable = findFirstAvailableDate(initialMonth, isDateDisabled);
    setSelectedDate(firstAvailable);
  }, [initialMonth]);

  useEffect(() => {
    if (!selectedDate || isDateDisabled(selectedDate)) {
      const fallback = findFirstAvailableDate(month, isDateDisabled);
      if (fallback) {
        setSelectedDate(fallback);
      }
    }
  }, [month]);

  useEffect(() => {
    if (!availableTimes.length) {
      setSelectedTime('');
      return;
    }

    if (!availableTimes.includes(selectedTime)) {
      setSelectedTime(availableTimes[0]);
    }
  }, [availableTimes, selectedTime]);

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
                  Demo mode: your inquiry is ready for backend hookup. Selected consultation:
                  {' '}
                  {selectedDateLabel}
                  {selectedTime ? ` at ${selectedTime}` : ''}.
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
                  <h3>{monthLabel}</h3>
                  <div className={styles.calendarControls}>
                    <button
                      aria-label="Previous month"
                      className={styles.calendarNavButton}
                      onClick={() => setMonth((current) => addMonths(current, -1))}
                      type="button"
                    >
                      <AtelierIcon name="chevron_left" />
                    </button>
                    <button
                      aria-label="Next month"
                      className={styles.calendarNavButton}
                      onClick={() => setMonth((current) => addMonths(current, 1))}
                      type="button"
                    >
                      <AtelierIcon name="chevron_right" />
                    </button>
                  </div>
                </div>

                <div className={styles.calendarPicker}>
                  <DayPicker
                    disabled={isDateDisabled}
                    fixedWeeks
                    hideNavigation
                    mode="single"
                    month={month}
                    onMonthChange={setMonth}
                    onSelect={setSelectedDate}
                    selected={selectedDate}
                    showOutsideDays
                    weekStartsOn={1}
                  />
                </div>

                <div className={styles.timesBlock}>
                  <label>
                    Available Times
                    <span className={styles.timezone}>{calendar.timezoneLabel}</span>
                  </label>
                  <p className={styles.selectedDate}>{selectedDateLabel}</p>
                  <div className={styles.timeButtons}>
                    {availableTimes.map((time) => (
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
