import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    install_requires=[
          'msgpack-rpc-python', 'numpy', 'opencv-contrib-python'
    ]
)
