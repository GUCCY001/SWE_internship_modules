-- ============================================================
-- SEED DATA
-- ============================================================

-- Students
INSERT INTO students (email, first_name, last_name, enrollment_date) VALUES
('jane.doe@example.com', 'Jane', 'Doe', '2026-01-15'),
('mark.smith@example.com', 'Mark', 'Smith', '2026-01-20'),
('amy.chen@example.com', 'Amy', 'Chen', '2026-02-01');

-- Courses
INSERT INTO courses (course_code, title, credit_hours) VALUES
('DEV-201', 'Intro to Backend Development', 4),
('DEV-305', 'Relational Databases & SQL', 3),
('DEV-410', 'Advanced React Patterns', 4);

-- Enrollments
INSERT INTO enrollments (student_id, course_id, grade, completion_status) VALUES
(1, 1, 'A', 'COMPLETED'),
(1, 2, NULL, 'IN_PROGRESS'),
(2, 1, 'B', 'COMPLETED'),
(2, 3, NULL, 'IN_PROGRESS'),
(3, 2, 'A', 'COMPLETED');


-- ============================================================
-- QUERY 1: Inner Join — student full name, course title, status
-- ============================================================

SELECT
    s.first_name || ' ' || s.last_name AS student_name,
    c.title AS course_title,
    e.completion_status
FROM enrollments e
INNER JOIN students s ON e.student_id = s.student_id
INNER JOIN courses c ON e.course_id = c.course_id;


-- ============================================================
-- QUERY 2: Aggregation — student count per course
-- ============================================================

SELECT
    c.title AS course_title,
    COUNT(e.student_id) AS total_students
FROM courses c
LEFT JOIN enrollments e ON c.course_id = e.course_id
GROUP BY c.title;


-- ============================================================
-- QUERY 3: Filtered search — students who COMPLETED a specific course
-- ============================================================

SELECT
    s.first_name || ' ' || s.last_name AS student_name,
    c.course_code,
    e.completion_status
FROM enrollments e
INNER JOIN students s ON e.student_id = s.student_id
INNER JOIN courses c ON e.course_id = c.course_id
WHERE c.course_code = 'DEV-201'
  AND e.completion_status = 'COMPLETED';