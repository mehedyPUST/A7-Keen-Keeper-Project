import { useContext } from "react";
import { TimelineContextCreate } from "../../context/TimelineContextCreator";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";

const TimeLine = () => {
    const { timeline } = useContext(TimelineContextCreate);

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        });
    };

    const getIcon = (type) => {
        if (type === "call") return <FiPhoneCall className="text-3xl text-blue-600" />;
        if (type === "text") return <MdOutlineTextsms className="text-3xl text-purple-600" />;
        if (type === "video") return <CiVideoOn className="text-3xl text-rose-600" />;
    };

    return (
        <div className="w-11/12 mx-auto py-10">
            <h2 className="text-4xl font-bold mb-10 text-gray-900">Interaction Timeline</h2>

            {timeline.length === 0 ? (
                <div className="bg-white rounded-3xl p-16 text-center shadow">
                    <div className="text-6xl mb-6">📅</div>
                    <h3 className="text-2xl font-semibold mb-2">No interactions yet</h3>
                    <p className="text-gray-500">Start calling, texting, or video calling your friends to see the timeline here.</p>
                </div>
            ) : (
                <div className="space-y-6">
                    {timeline
                        .slice()
                        .reverse()
                        .map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-3xl p-8 shadow hover:shadow-xl transition flex items-center gap-6"
                            >
                                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
                                    {getIcon(item.type)}
                                </div>

                                <div className="flex-1">
                                    <p className="text-xl">
                                        <span className="font-semibold capitalize">{item.type}</span> with{" "}
                                        <span className="font-medium">{item.name}</span>
                                    </p>
                                    <p className="text-gray-500 mt-1">{formatDate(item.date)}</p>
                                </div>

                                {/* <div className="text-xs bg-emerald-100 text-emerald-700 px-4 py-2 rounded-2xl font-medium">
                                    Completed
                                </div> */}
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default TimeLine;