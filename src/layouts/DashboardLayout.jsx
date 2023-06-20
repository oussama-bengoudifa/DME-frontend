/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";

//services
import {} from "../services";

//mantine
import { FileInput, Loader, Tooltip, Modal, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { AiOutlineUpload, AiOutlineFile } from "react-icons/ai";

import { predictImage } from "../services";

export const DashboardLayout = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const [isFecthing, setIsFetching] = useState(false);
  const [value, setValue] = useState(null);
  const [result, setResult] = useState(null);
  const [fetch, setFetch] = useState(false);
  const [file, setfile] = useState(null);

  const predict = async () => {
    setFetch(true);
    setIsFetching(true);
    const response = await predictImage(value);
    setResult(response?.diagnosis);
    setIsFetching(false);
  };

  return (
    <>
      <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full mb-4">
          <img
            onClick={() => {
              setValue(null);
              setIsFetching(false);
              setResult(null);
              setFetch(false);
              setfile(null);
            }}
            src={"/svg/eye.svg"}
            alt="sumz_logo"
            className="w-20 object-cover cursor-pointer"
          />
        </nav>
        <h1 className="head_text">
          Intelligent System <br className="max-md:hidden" />
          <span className="orange_gradient">Diabetic Macular Edema</span>{" "}
        </h1>
        <h2 className="desc mt-20">
          The Intelligent System for that uses deep learning (CNN) and retinal
          imaging to detect diabetic macular edema, improving care and patient
          outcomes.
        </h2>
      </header>
      <section className="mt-16 w-full max-w-xl">
        <div className="flex flex-col w-full gap-2">
          <form className="relative gap-4 flex justify-center items-center">
            <FileInput
              className="w-full"
              value={value}
              onChange={(file) => {
                setResult(null);
                setFetch(false);
                setValue(file);
                setfile(URL.createObjectURL(file));
              }}
              icon={<AiOutlineUpload size={16} />}
              placeholder="Upload your image"
            />

            <button
              onClick={(e) => {
                e.preventDefault();
                predict();
              }}
              className="black_btn"
            >
              Predict
            </button>
          </form>
        </div>
      </section>
      {fetch && (
        <section className="flex w-full max-w-xl">
          {isFecthing ? (
            <div className="w-full py-20 flex justify-center items-center">
              <Loader variant="dots" />
            </div>
          ) : (
            <div className="my-10 w-full flex  items-center">
              <div className="flex flex-col w-full gap-3">
                <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                  Decision <span className="blue_gradient">Result</span>
                </h2>
                <div className="summary_box flex justify-between items-center">
                  <p className="font-inter font-medium text-sm text-gray-600">
                    {result}
                  </p>
                  <Tooltip label={"See image"}>
                    <span onClick={() => open()}>
                      <AiOutlineFile fontSize={16} />
                    </span>
                  </Tooltip>
                </div>
              </div>
            </div>
          )}
        </section>
      )}
      <Modal opened={opened} centered onClose={close} size="md">
        <Image src={file} />
      </Modal>
    </>
  );
};
