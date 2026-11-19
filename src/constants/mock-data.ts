import { Subject } from "@/types";

export const mockSubjects: Subject[] = [
  {
    id: 1,
    code: "CS 201",
    name: "Data Structures and Algorithms",
    department: "Computer Science",
    description: "Studies core data structures, algorithm design, and complexity analysis.",
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    code: "MATH 221",
    name: "Linear Algebra",
    department: "Mathematics",
    description: "Covers vector spaces, matrices, linear transformations, and eigenvalues.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "BIO 110",
    name: "Principles of Biology",
    department: "Biology",
    description: "Introduces cell biology, genetics, evolution, and organismal diversity.",
    createdAt: new Date().toISOString(),
  },
];

export default mockSubjects;