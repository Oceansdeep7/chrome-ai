import LoadingComponent from "@/components/Loading";

export default function Loading() {
    return (<div className="w-full h-full flex justify-center items-center">
            <div className='-mt-16 scale-75'>
                <LoadingComponent/>
            </div>
        </div>
    );
}

