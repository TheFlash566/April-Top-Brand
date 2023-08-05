import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const Counter = ({ target, title, duration }) => {
	const [ref, inView] = useInView({
		threshold: 0.3,
		triggerOnce: true,
	});

	return (
		<div className='w-full md:w-1/4 p-2 md:p-4 text-center flex flex-col items-center' ref={ref}>
			<CountUp
				start={0}
				end={inView ? target : 0}
				duration={duration}
				useEasing={true}>
				{({ countUpRef }) => (
					<span className='' style={{fontSize: '55px', fontWeight: 'bold'}} ref={countUpRef} />
				)}
			</CountUp>
			<p
				className={` animation delay ${
					inView === true ? 'opacity-100 transform-show' : 'opacity-100 transform-show'
				}`} style={{fontWeight: 600, color: '#db3030' }}>
				{title}
			</p>
			<style jsx>{`
				.delay {
					transition-delay: ${duration}s;
				}
				.transform-hide {
					transform: translate3d(0, 1rem, 0);
				}
				.transform-show {
					transform: translate3d(0, 0, 0);
				}
			`}</style>
		</div>
	);
};

export default Counter;