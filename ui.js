// import React from 'react',
// import {render, Box, Text} from 'ink';

// Const Borders = () => (
// 	<Box flexDirection='column' alignItems='center'>

// 		<Box>
// 			<Box borderStyle='groove' borderColor='pink'>
// 				<Text> Box 1</Text>
// 		</Box>
// 	</Box>
// )

'use strict';
const React = require('react');
const { Text, Box } = require('ink');

const App = () => (
	<Box flexDirection="column" alignItems="center" padding={3}>
		<Box>
			<Box borderStyle="round" borderColor="#ff0066" padding={1} marginLeft={3}>
				<Text>
					<Text italic backgroundColor="#0f3e3e" color="#33cccc">
						Box 1
					</Text>
				</Text>
			</Box>
		</Box>

		<Box>
			<Box
				borderStyle="classic"
				borderColor="#bf80ff"
				padding={1}
				marginLeft={3}
			>
				<Text>
					<Text inverse color="#ccff33">
						Box 2
					</Text>
				</Text>
			</Box>

			<Box borderStyle="classic" borderColor="green" padding={1} marginLeft={3}>
				<Text>
					<Text inverse color="#ff9999">
						Box 3
					</Text>
				</Text>
			</Box>
		</Box>

		<Box>
			<Box
				borderStyle="double"
				borderColor="#ffff4d"
				padding={1}
				marginLeft={3}
			>
				<Text>
					<Text color="#0099cc">Box 4</Text>
				</Text>
			</Box>

			<Box
				borderStyle="doubleSingle"
				borderColor="#ff80aa"
				padding={1}
				marginLeft={3}
			>
				<Text>
					<Text color="#00ff00">Box 5</Text>
				</Text>
			</Box>

			<Box
				borderStyle="double"
				borderColor="#80bfff"
				padding={1}
				marginLeft={3}
			>
				<Text>
					<Text color="#ff9966">Box 6</Text>
				</Text>
			</Box>
		</Box>
	</Box>
);

module.exports = App;
