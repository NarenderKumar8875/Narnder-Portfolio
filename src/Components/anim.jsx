import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';

const MatterScene = () => {
    const canvasRef = useRef(null);
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const { Engine, Render, Runner, World, Bodies, Mouse, Events, Body, Common } = Matter;

        // इंजन बनाना
        const engine = Engine.create();
        engine.world.gravity.y = 0;
        engine.world.gravity.x = 0;
        engine.world.gravity.scale = 0.1;

        // रेंडर सेट करना
        const render = Render.create({
            element: canvasRef.current,
            engine: engine,
            options: {
                showVelocity: false,
                width: dimensions.width,
                height: dimensions.height,
                wireframes: false,
                background: '#111111',
            },
        });

        // रनर बनाना
        const runner = Runner.create();

        // वर्ल्ड और ग्रेविटी सेट करना
        const world = engine.world;
        world.gravity.scale = 0;

        // आकर्षक बॉडी बनाना (माउस के पास खींचने के लिए)
        const attractiveBody = Bodies.circle(
            render.options.width / 2,
            render.options.height / 2,
            Math.max(dimensions.width / 15, dimensions.height / 10) / 3,
            {
                render: {
                    fillStyle: '#2f510d',
                    strokeStyle: 'rgb(240,240,240)',
                    lineWidth: 0,
                },
                isStatic: true,
            }
        );
        World.add(world, attractiveBody);

        // कुछ बोडीज़ (गेंदें) जोड़ना
        const bodies = [];
        for (let i = 0; i < 70; i++) {
            let x = Common.random(0, render.options.width);
            let y = Common.random(0, render.options.height);
            let s = Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
            let polygonNumber = Common.random(3, 6);

            const body = Bodies.polygon(x, y, polygonNumber, s, {
                mass: s / 5,
                friction: 5,
                frictionAir: 0.02,
                angle: Math.round(Math.random() * 360),
                render: {
                    fillStyle: '#1e1e1e',
                    strokeStyle: 'black',
                    lineWidth: 2,
                },
            });
            World.add(world, body);
            bodies.push(body);

            let r = Common.random(0, 1);
            const circle = Bodies.circle(x, y, Common.random(2, 8), {
                mass: 0.5,
                friction: 90,
                frictionAir: 0.1,
                render: {
                    fillStyle: r > 0.3 ? '#241941' : '#410d0d',
                    strokeStyle: 'black',
                    lineWidth: 2,
                },
            });
            World.add(world, circle);
            bodies.push(circle); // Add r body to the array
        }

        // माउस नियंत्रण जोड़ना
        const mouse = Mouse.create(render.canvas);

        // attractiveBody को तेजी से माउस की दिशा में खींचना
        Events.on(engine, 'afterUpdate', function () {
            if (!mouse.position.x) return;

            // attractiveBody को तेजी से खींचने के लिए translate का इस्तेमाल करेंगे
            const speed = 0.1;  // बदलाव की स्पीड को बढ़ा सकते हैं
            const dx = mouse.position.x - attractiveBody.position.x;
            const dy = mouse.position.y - attractiveBody.position.y;

            // attractiveBody को माउस के पास तेजी से लाने के लिए
            Body.translate(attractiveBody, {
                x: dx * speed,
                y: dy * speed,
            });

            // बाकी सभी बॉडीज़ को माउस की दिशा में आकर्षित करना
            bodies.forEach(body => {
                // धीरे-धीरे प्रत्येक बॉडी को माउस की दिशा में खींचना
                const bodyForceMagnitude = 0.001; // आकर्षण बल की तीव्रता
                const dx = mouse.position.x - body.position.x;
                const dy = mouse.position.y - body.position.y;
                const angle = Math.atan2(dy, dx);

                // आकर्षण बल की दिशा और तीव्रता
                const force = {
                    x: Math.cos(angle) * bodyForceMagnitude,
                    y: Math.sin(angle) * bodyForceMagnitude,
                };

                // आकर्षण बल को बॉडी पर लागू करना
                Body.applyForce(body, body.position, force);
            });
        });

        // विंडो का आकार बदलने पर सेटिंग अपडेट करना
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
            render.canvas.width = window.innerWidth;
            render.canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        // इंजन और रेंडर शुरू करना
        Runner.run(runner, engine);
        Render.run(render);

        // क्लीनअप
        return () => {
            window.removeEventListener('resize', handleResize);
            Render.stop(render);
            Runner.stop(runner);
            World.clear(world);
            Engine.clear(engine);
            render.canvas.remove();
        };
    }, [dimensions]);

    return <div className='w-full h-screen overflow-hidden' ref={canvasRef} />;
};

export default MatterScene;
