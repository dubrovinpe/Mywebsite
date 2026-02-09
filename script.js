document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. CUSTOM CURSOR LOGIC
    // ==========================================
    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');
    
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;
    });

    const interactives = document.querySelectorAll('a, .tilt-card, .process-item');
    interactives.forEach(el => {
        el.addEventListener('mouseenter', () => cursorOutline.classList.add('hovered'));
        el.addEventListener('mouseleave', () => cursorOutline.classList.remove('hovered'));
    });

    // ==========================================
    // 2. THREE.JS SHADER BACKGROUND
    // ==========================================
    const initThree = () => {
        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        const uniforms = {
            u_time: { value: 0.0 },
            u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
        };

        const fragmentShader = `
            uniform float u_time;
            uniform vec2 u_resolution;
            
            void main() {
                vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / u_resolution.y;
                vec2 uv0 = uv;
                vec3 finalColor = vec3(0.0);
                
                // "Digital" Fluid movement
                for (float i = 0.0; i < 3.0; i++) {
                    uv = fract(uv * 1.5) - 0.5;
                    float d = length(uv) * exp(-length(uv0));
                    
                    // Color palette: Deep Blue -> Cyan transition
                    vec3 col = 0.5 + 0.5 * cos(u_time + uv0.xyx + vec3(0,2,4));
                    // Adjust to match brand colors (#2962ff -> #00d4ff)
                    col = mix(vec3(0.02, 0.03, 0.05), vec3(0.0, 0.83, 1.0), d * 2.0); 
                    
                    d = sin(d*8. + u_time)/8.;
                    d = abs(d);
                    d = pow(0.01 / d, 1.2);
                    
                    finalColor += col * d;
                }
                    
                gl_FragColor = vec4(finalColor, 1.0);
            }
        `;

        const geometry = new THREE.PlaneGeometry(2, 2);
        const material = new THREE.ShaderMaterial({
            uniforms: uniforms,
            fragmentShader: fragmentShader,
            vertexShader: `void main() { gl_Position = vec4( position, 1.0 ); }`
        });

        const plane = new THREE.Mesh(geometry, material);
        scene.add(plane);

        const animate = () => {
            requestAnimationFrame(animate);
            uniforms.u_time.value += 0.01;
            renderer.render(scene, camera);
        };
        animate();

        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            uniforms.u_resolution.value.x = window.innerWidth;
            uniforms.u_resolution.value.y = window.innerHeight;
        });
    };
    initThree();

    // ==========================================
    // 3. MAGNETIC BUTTONS & ITEMS
    // ==========================================
    const magnets = document.querySelectorAll('.magnetic-area');
    
    magnets.forEach((magnet) => {
        // FIX: Skip magnetic movement for buttons to ensure clickability
        if (magnet.querySelector('.btn-main')) return;

        const content = magnet.querySelector('.magnetic-wrap');
        
        magnet.addEventListener('mousemove', (e) => {
            const rect = magnet.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            // Pull factor (0.3 = subtle, 0.6 = strong)
            content.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });

        magnet.addEventListener('mouseleave', () => {
            content.style.transform = 'translate(0px, 0px)';
        });
    });

    // ==========================================
    // 4. 3D TILT CARDS
    // ==========================================
    const cards = document.querySelectorAll('.tilt-card');
    
    cards.forEach(card => {
        const glare = card.querySelector('.card-glare');
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -10; // Max rotation deg
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            
            glare.style.opacity = '1';
            glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 212, 255, 0.15), transparent 60%)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            glare.style.opacity = '0';
        });
    });

    // ==========================================
    // 5. BOTTOM SCROLLING LIGHT EFFECT
    // ==========================================
    const beam = document.getElementById('bottom-beam');
    const glow = document.getElementById('glow-overlay');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const docHeight = document.body.scrollHeight;
        
        // Calculate scroll percentage (0.0 to 1.0)
        const scrollPercent = scrollY / (docHeight - windowHeight);

        // Activate beam opacity based on scroll
        beam.style.opacity = 0.1 + (scrollPercent * 0.9);

        // Color shift based on scroll (Blue -> Cyan)
        if (scrollPercent > 0.6) {
            // Cyan Phase (Contact/Footer area)
            beam.style.background = 'linear-gradient(90deg, transparent, #00d4ff, transparent)';
            beam.style.boxShadow = '0 -10px 50px 10px #00d4ff';
            glow.style.background = 'radial-gradient(circle at 50% 100%, rgba(0, 212, 255, 0.08), transparent 60%)';
        } else {
            // Deep Blue Phase (Top/Expertise area)
            beam.style.background = 'linear-gradient(90deg, transparent, #2962ff, transparent)';
            beam.style.boxShadow = '0 -10px 50px 10px #2962ff';
            glow.style.background = 'radial-gradient(circle at 50% 100%, rgba(41, 98, 255, 0.05), transparent 60%)';
        }
    });
});