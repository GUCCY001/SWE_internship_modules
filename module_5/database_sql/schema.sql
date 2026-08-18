-- Drop tables if they already exist (useful for re-running this script)
DROP TABLE IF EXISTS enrollments;
DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS students;

-- ---------- Students ----------
CREATE TABLE students (
    student_id      SERIAL PRIMARY KEY,
    email            VARCHAR(255) UNIQUE NOT NULL,
    first_name       VARCHAR(100) NOT NULL,
    last_name        VARCHAR(100) NOT NULL,
    enrollment_date  DATE NOT NULL
);

-- ---------- Courses ----------
CREATE TABLE courses (
    course_id     SERIAL PRIMARY KEY,
    course_code   VARCHAR(20) UNIQUE NOT NULL,
    title         VARCHAR(150) NOT NULL,
    credit_hours  INTEGER NOT NULL
);

-- ---------- Enrollments (junction table) ----------
CREATE TABLE enrollments (
    enrollment_id      SERIAL PRIMARY KEY,
    student_id         INTEGER NOT NULL REFERENCES students(student_id),
    course_id          INTEGER NOT NULL REFERENCES courses(course_id),
    grade              VARCHAR(2),
    completion_status  VARCHAR(20) NOT NULL
        CHECK (completion_status IN ('IN_PROGRESS', 'COMPLETED', 'DROPPED'))
);