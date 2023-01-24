import { generateDatesRange } from "../utils/generateDatesRange";
import { HabitDay } from "./HabitDay";

export function SummaryTable() {
  const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  const summaryDates = generateDatesRange();
  const minimumDatesAcceptable = 18 * 7;
  const minimumDaysToFill = minimumDatesAcceptable - summaryDates.length;

  return (
    <div className='w-full flex'>

      <div className='grid grid-rows-7 grid-flow-row gap-3'>
        {weekDays.map((day, i) => {
          return (
            <div key={`${day}-${i}`} className='text-zinc-400 text-xl h-10 w-10 flex items-center justify-center font-bold'>
              {day}
            </div>
          )
        })}
      </div>

      <div className='grid grid-rows-7 grid-flow-col gap-3'>
        {summaryDates.map(date => {
          return (
            <HabitDay key={date.toString()} />
          )
        })}
        {minimumDaysToFill > 0 && Array.from({ length: minimumDaysToFill }).map((_, i) => {
          return (
            <div
              key={i}
              className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
            />
          )
        })

        }
      </div>

    </div>
  );
}