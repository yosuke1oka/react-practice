// コンポーネントが受けとる引数（値）
interface Props {
    title: string;
    year: number;
    month: number;
    day: number;
    content: string;
  }
  
  export default function Note({ title, year, month, day, content }: Props) {
    return (
      <div className="
        mb-5 p-5 w-full border-4 border-gray-200
        border-l-[1rem] border-l-blue-300 rounded-xl
      ">
        {/* タイトル */}
        <h2 className="mb-1 text-2xl text-blue-600 font-bold">
          {title}
        </h2>
        {/* 日付 */}
        <div className="mb-4 text-gray-500">
          {year}年{month}月{day}日
        </div>
   
        {/* 内容 */}
        <p>
          {content}
        </p>
      </div>
    );
  };
  