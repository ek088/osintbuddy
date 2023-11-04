import { InquiryHeader } from "@/components/Headers";
import {
  DocumentMagnifyingGlassIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useEffectOnce } from "@/app/hooks";

interface SettingCardProps {
  title: string;
  description: string;
  created?: string;
  updatedAt?: string;
  id: string;
}

export function ScanMachineCard({
  title,
  description,
  id,
  created,
  updatedAt,
}: SettingCardProps) {
  const navigate = useNavigate();

  return (
    <>
      <section className="relative  bg-slate-900 mb-4 border border-dark-400 font-medium text-slate-400 p-4 rounded-md max-w-md min-w-[32rem]  mx-2 text-sm flex-col flex justify-between">
        <div className="flex flex-col">
          <div className="flex w-full justify-between">
            <div className="flex flex-col">
              <h4 className="mb-2 leading-4 text-lg tracking-tight text-slate-400 dark:text-slate-300">
                {title}
              </h4>
              <div className="flex flex-col font-normal">
                <p>{description}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-4 font-normal">
            <p className="">Created: {created}</p>
          </div>
        </div>
        <ul className="flex w-full items-center justify-between mt-4">
          <li className="w-full mr-4">
            <button className="w-full ml-auto pr-3 text-left text-sm font-semibold text-info-100 hover:text-info-200 flex items-center justify-between border border-info-200 hover:border-info-300 py-2 px-3 rounded-md mr-1">
              <span className="mr-4 whitespace-nowrap">Start scan</span>
              <DocumentMagnifyingGlassIcon className="h-5 w-5" />
            </button>
          </li>
          <li className="w-full mr-4">
            <button
              onClick={() => navigate(`${id}`)}
              className="w-ful ml-auto pr-3 text-left text-sm font-semibold text-info-100 hover:text-info-200 flex items-center justify-between border border-info-200 hover:border-info-300 py-2 px-3 rounded-md mr-1"
            >
              <span className="mr-4 whitespace-nowrap">Edit workflow</span>
              <PencilIcon className="h-5 w-5" />
            </button>
          </li>
          <li className="w-full">
            <button className="w-full text-slate-400 ml-auto pr-3 text-left text-sm font-semibold  flex items-center justify-between border hover:border-danger-600  border-danger-500 py-2 px-3 rounded-md">
              <span className="mr-4 whitespace-nowrap  ">Delete</span>
              <TrashIcon className="h-5 w-5 hover:border-danger-600  text-danger-500" />
            </button>
          </li>
        </ul>
      </section>
    </>
  );
}

export default function ScansPage() {
  const navigate = useNavigate();
  let [isModalOpen, setIsModalOpen] = useState(false);
  const cancelCreateRef = useRef<HTMLElement>(null);
  const closeModal = () => setIsModalOpen(false);

  const [scanMachines, setScanMachines] = useState([]);


  useEffectOnce(() => {
  });

  return (
    <>
      <InquiryHeader title="Scans" header="Passive Reconnaissance" />
      <div className="flex flex-col sm:px-2 lg:px-6 my-2 relative mx-auto w-full justify-center">
        <p className="text-slate-400">
          Automate your data gathering by scheduling scans
        </p>

        <div className="mt-6 flex flex-col ">
          <div className="flex items-center">
            <h3 className="font-display leading-4 mt-6 text-xl tracking-tight text-slate-400 dark:text-slate-300">
              Browse your scan machines
            </h3>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="ring-1 ml-auto bg-dark-800 pr-3 text-left text-sm font-semibold text-info-100 hover:text-info-200 flex items-center border border-info-200 hover:border-info-300 py-2 px-3 rounded-md mr-1"
            >
              Create template
              <PlusIcon className="ml-2 w-5 h-5 " />
            </button>
          </div>
          <section className="border-dark-300 w-full flex-wrap  overflow-y-scroll my-3 border-t flex py-6">
            {scanMachines.map((machine: JSONObject) => {
              return (
                <ScanMachineCard
                  title={machine.name}
                  updatedAt={machine.updated}
                  created={machine.created}
                  id={machine.id}
                  description={machine.description}
                />
              );
            })}
          </section>
        </div>
      </div>
      {/* <CreateScanModal
        closeModal={closeModal}
        isOpen={isModalOpen}
        cancelCreateRef={cancelCreateRef}
        refreshData={() => null}
      /> */}
    </>
  );
}
