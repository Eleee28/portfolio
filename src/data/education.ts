export interface EducationEntry {
	title: string;
	institution: string;
	location: string;
	dates: string;
	description: string;
	image?: string;
	url: string;
}

export const educationData: EducationEntry[] = [
	{
		title: "Degree in Computer Science",
		institution: "Universidad Complutense de Madrid",
		location: "Madrid, Spain",
		dates: "2022 - Present",
		description: "Studying core principles of software engineering, hardware programming, algorithms, data structures and systems programming. Built multiple academic projects involving C/C++, Java, databases, VHDL and Assembly.",
		image: "/images/edu/ucm.png",
		url: "https://informatica.ucm.es/",
	},
	{
		title: "Programming School",
		institution: "42 Madrid Fundación Telefónica",
		location: "Madrid, Spain",
		dates: "2023 - Current",
		description: "Immersive, peer-to-peer programming school with a project-based, self-paced curriculum. Focus on algorithms, C programming, systems and real-world problem solving.",
		image: "/images/edu/42.svg",
		url: "https://www.42madrid.com/",
	},
	{
		title: "Exchange Program - Computer Science",
		institution: "TU Dublin",
		location: "Dublin, Ireland",
		dates: "2024 - 2025",
		description: "Participated in an exchange program where I studied computer networks, distributed systems and developed web and mobile applications. Gained international experience and exposure to project-based collaboration.",
		image: "/images/edu/tud.svg",
		url: "https://www.tudublin.ie/",
	},
]