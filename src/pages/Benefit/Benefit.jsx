import React from "react";

const Benefit = () => {
  return (
    <>
      <h2 className="text-3xl p-10 font-bold text-gray-800">Benefits</h2>
      <div className="flex flex-col md:flex-row md:space-x-2 md:px-10 lg:px-10 xl:px-30">
        <div className="">
          <h3 className="p-8">
            <div className="text-2xl">Boost Your Vitality</div>
            Rediscover the energetic you! Known for centuries, Shilajit, when
            traditionally combined with milk, is a powerful rejuvenator,
            restoring stamina and vitality.
          </h3>
          <div className="p-8">
            <h2 className="text-2xl">Nature's Multivitamin</h2>
            Rich in essential vitamins (A, B complex, C) and minerals, Shilajit
            contains unique components like dibenzo alpha pyrones, fulvic acid,
            and terpenoids, known for promoting health.
          </div>
          <div className="p-8">
            <h2 className="text-2xl">Enhance Natural Desires</h2>
            Celebrated as nature's premier enhancer, Shilajit revitalizes cells,
            bolsters heart health, and augments digestive and endurance power.
            Elevate both physical and emotional connections.
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://i.ebayimg.com/images/g/mY0AAOSwHtJlAEva/s-l1200.jpg"
            alt=""
            className="py-8 md:py-0 md:w-50"
          />
        </div>

        <div className="p-2">
          <div className="p-8">
            <h2 className="text-2xl">Detox Naturally</h2>
            Combat urban pollutants. Fulvic acid in Shilajit works diligently to
            detoxify and neutralize harmful compounds, ensuring a purified.
          </div>
          <div className="p-8">
            <h2 className="text-2xl">Stabilize Mood</h2>
            Embrace tranquility. Feel a noticeable uplift in your mood within
            just a week, as Shilajit harmonizes emotions and greatly diminishes
            feelings of unease.
          </div>
          <div className="p-8">
            <h2 className="text-2xl">Combat Aging</h2>
            As we age, cellular energy production diminishes. But Shilajit
            actively revitalizes coenzyme Q10 in the mitochondria, paving the
            way for enhanced energy and a more youthful you.
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefit;
