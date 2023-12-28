import MindmapComponent from "~/components/mindmap3";
// import MindmapControl from "~/components/mindmap2/MindmapControl";
import { getServerSession } from "next-auth";

import "./index.css"

export const metadata = {
	title: 'Mindmap detail',
	description: 'Mindmap detail vs id',
	openGraph: {
		title: 'Mindmap detail',
		description: 'Mindmap detail vs id'
	}
};

async function MyMindmapUsePage() {
  const session = await getServerSession();

	if (!session) {
		redirect("/signin");
	}

	return (
		<MindmapComponent />
	);
}

export default MyMindmapUsePage;
